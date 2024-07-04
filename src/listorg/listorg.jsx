
import React from 'react';
import DataFetcher from "./arrow";
import Select from "react-select";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import { useEffect, useState, useRef } from 'react';
import styles from './style.module.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Navbarparent from '../components/navbarparent';
import OrganizationList from '../components/organizationlist';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function ListOrg() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [selectedItem, setSelectedItem] = useState('تمام بوفه ها');
  const [index, setIndex] = React.useState(0);
  const [videoRatio, setVideoRatio] = useState("4_3");
  const [items, setItems] = useState([]);
  const [filterLetter, setFilterLetter] = useState('');
  const [organizations, setOrganizations] = useState([]);

  const fetchDataFromURL = async () => {
    const token = 'JWT ' + localStorage.getItem("token");

    try {
      const response = await axios.get('https://ghablameh.fiust.ir/api/v1/buffets/', {
        headers: {
          Authorization: token
        }
      });

      setItems(response.data);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const fetchOrganizations = async () => {
    try {
      const response = await axios.get('https://ghablameh.fiust.ir/api/v1/organizations/');
      setOrganizations(response.data);
    } catch (error) {
      console.error('Error retrieving organizations:', error);
    }
  };

  useEffect(() => {
    fetchDataFromURL();
    fetchOrganizations();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const [loading, setLoading] = useState(false);
  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      loading();
    }
  };
  const options = [
    { value: 'دانشگاه علم و صنعت', label: 'دانشگاه علم و صنعت' },
    { value: 'دانشگاه امیرکبیر', label: 'دانشگاه امیرکبیر' },
    { value: 'دانشگاه شریف', label: 'دانشگاه شریف' },
  ];
  const handleSelectChange = (selectedOption) => {
    setSelectedItem(selectedOption.value);
  };
  useEffect(() => {
    // Preloader
    window.onload = function () {
      window.setTimeout(fadeout, 500);
    };
    function fadeout() {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.display = 'none';
      }
    }
  }, []);

  const filteredItems = items.filter(item => {
    const firstLetter = item.name.charAt(0).toUpperCase(); // Get the first letter and convert it to uppercase
    return filterLetter === '' || firstLetter === filterLetter;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('fa-IR', options);
  };

  return (
    <div className={styles.land}>
      <Navbarparent></Navbarparent>
      <body>
        <div>
          < DataFetcher />
        </div>
        <div className={styles.menu}>
          <ul className={styles['m-navbar']}>
            <li
              className={`${styles['m-navbar-item']} ${selectedItem === 'تمام بوفه ها' ? styles.active : ''}`}
              onClick={() => handleItemClick('تمام بوفه ها')}
            >
              تمام بوفه ها
            </li>
            <li
              className={`${styles['m-navbar-item']} ${selectedItem === 'Item 2' ? styles.active : ''}`}
              onClick={() => handleItemClick('Item 2')}
            >
              نام
            </li>
            <li
              className={`${styles['m-navbar-item']} ${selectedItem === 'Item 3' ? styles.active : ''}`}
              onClick={() => handleItemClick('Item 3')}
            >
              تاریخ تشکیل شده
            </li>
         

          </ul>
          <div className={styles.content}>
  <div className={`${styles['content-item']} ${selectedItem === 'تمام بوفه ها' ? styles.active : ''}`}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white bg-opacity-50 shadow-md rounded-lg overflow-hidden custom-width" style={{ border: '1px solid rgb(38, 87, 124)', width: '300px' }}>
          {organizations.length > 0 && organizations.find(org => org.id === item.organization)?.image_url && organizations.find(org => org.id === item.organization)?.image_url.toLowerCase().endsWith('.jpeg') ? (
            <div className="overflow-hidden h-40" style={{ padding: '10px' }}>
              <img src={'https://ghablameh.fiust.ir' + organizations.find(org => org.id === item.organization)?.image_url} className="w-full h-full rounded-lg" style={{ objectFit: 'contain' }} alt={item.organization_name} />
            </div>
          ) : (
            <div style={{
              height: "160px",
         
              backgroundImage: "repeating-conic-gradient(#26577c  0% 25%, #ffffff 0% 50%)",
              backgroundPosition: "0 0, 32px 32px",
              backgroundSize: "50px 50px",
              opacity: '0.5'
            }}
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.organization_name}</p>
            <p className="text-gray-600">{new Date(item.created_at).toLocaleDateString('fa-IR')}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className={`${styles['content-item']} ${selectedItem === 'Item 2' ? styles.active : ''}`}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {filteredItems
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item, index) => (
        <div key={index} className="bg-white bg-opacity-50 shadow-md rounded-lg overflow-hidden" style={{ border: '1px solid rgb(38, 87, 124)' ,  width: '300px' }}>
        {organizations.length > 0 && organizations.find(org => org.id === item.organization)?.image_url && organizations.find(org => org.id === item.organization)?.image_url.toLowerCase().endsWith('.jpeg') ? (
          <div className="overflow-hidden h-40" style={{ padding: '10px' }}>
            <img src={'https://ghablameh.fiust.ir' + organizations.find(org => org.id === item.organization)?.image_url} className="w-full h-full rounded-lg" style={{ objectFit: 'contain' }} alt={item.organization_name} />
          </div>
        ) : (
          <div style={{
            height: "160px",
            backgroundImage: "repeating-conic-gradient(#26577c  0% 25%, #ffffff 0% 50%)",
            backgroundPosition: "0 0, 32px 32px",
            backgroundSize: "50px 50px",
            opacity: '0.5'
          }}
          />
        )}
         <div className="p-4">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.organization_name}</p>
            <p className="text-gray-600">{new Date(item.created_at).toLocaleDateString('fa-IR')}</p>
          </div>
        </div>
      ))}
  </div>
  </div>
  <div className={`${styles['content-item']} ${selectedItem === 'Item 3' ? styles.active : ''}`}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {filteredItems
      .slice()
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .map((item, index) => (
        <div key={index} className="bg-white bg-opacity-50 shadow-md rounded-lg overflow-hidden" style={{ border: '1px solid rgb(38, 87, 124)', width: '300px' }}>
        {organizations.length > 0 && organizations.find(org => org.id === item.organization)?.image_url && organizations.find(org => org.id === item.organization)?.image_url.toLowerCase().endsWith('.jpeg') ? (
          <div className="overflow-hidden h-40" style={{ padding: '10px' }}>
            <img src={'https://ghablameh.fiust.ir' + organizations.find(org => org.id === item.organization)?.image_url} className="w-full h-full rounded-lg" style={{ objectFit: 'contain' }} alt={item.organization_name} />
          </div>
        ) : (
          <div style={{
            height: "160px",
            backgroundImage: "repeating-conic-gradient(#26577c  0% 25%, #ffffff 0% 50%)",
            backgroundPosition: "0 0, 32px 32px",
            backgroundSize: "50px 50px",
            opacity: '0.5'
          }}
          />
        )}
         <div className="p-4">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.organization_name}</p>
            <p className="text-gray-600">{new Date(item.created_at).toLocaleDateString('fa-IR')}</p>
          </div>
        </div>
      ))}
  </div>
</div>
</div>
        </div>
      </body>
      <OrganizationList />
    </div>
  );
}

export default ListOrg;


