import React from 'react';

import Navbar from '../components/Navbar';


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
  const [selectedItem, setSelectedItem] = useState('option1');
  const [index, setIndex] = React.useState(0);
  const [videoRatio, setVideoRatio] = useState("4_3");
  const [items, setItems] = useState([]);
  const [filterLetter, setFilterLetter] = useState('');
  const fetchDataFromURL = async () => {
    const token = 'JWT ' + localStorage.getItem("token");

    try {
      const response = await axios.get('https://ghablameh.fiust.ir/api/v1/buffets/', {
        headers: {
          Authorization: token
        }
      });

      console.log('Data retrieved:', response.data);
      // Assuming the response data is an array of objects with `name` and `organization` properties
      setItems(response.data);

    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromURL();

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

    { value: 'option1', label: 'دانشگاه علم و صنعت' },
    { value: 'option2', label: 'دانشگاه امیرکبیر' },
    { value: 'option3', label: 'دانشگاه شریف' },
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
            <li>
              <div className={styles.select}>
                <Select options={options} onChange={handleSelectChange} />
              </div>
            </li>

          </ul>
          <div className={styles.content}>
            <div className={`${styles['content-item']} ${selectedItem === 'تمام بوفه ها' ? styles.active : ''}`}>
              {items.map((item, index) => (
                <div className={styles['flex-item']}>
                  <h3>{item.name}</h3>
                  <p>{item.organization_name}</p>
                  <p>{item.created_at}</p>
                </div>
              ))}


            </div>


            <div className={`${styles['content-item']} ${selectedItem === 'Item 2' ? styles.active : ''}`}>
              {items
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item, index) => (
                  <div key={index} className={styles['flex-item']}>
                    <h3>{item.name}</h3>
                    <p>{item.organization_name}</p>
                    <p>{item.created_at}</p>
                  </div>
                ))}


            </div>

            <div className={`${styles['content-item']} ${selectedItem === 'Item 3' ? styles.active : ''}`}>
              {items
                .slice() // Create a shallow copy of the items array to avoid mutating the original array
                .sort((a, b) => new Date(a.created_at) - new Date(b.created_at)) // Sort items by created_at date
                .map((item, index) => (
                  <div key={index} className={styles['flex-item']}>
                    <h3>{item.name}</h3>
                    <p>{item.organization_name}</p>
                    <p>{item.created_at}</p>
                  </div>
                ))}

            </div>
          </div>
        </div>
      </body>
      <OrganizationList />
    </div>
  );
}

export default ListOrg;
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

