import React from 'react';

import Navbar from '../Navbar';
import Footer from '../footer';
import img1 from "./assets/img/main/c1.png"
import img2 from "./assets/img/main/c2.png"
import img6 from "./assets/img/main/d1.jpeg"
import img4 from "./assets/img/main/c4.png"
import img5 from "./assets/img/main/c5.png"
import cup from './assets/img/main/coffee-cup.svg'
import laptop from './assets/img/main/laptop.svg'
import layout from "./assets/img/main/layout.svg"
import img3 from "./assets/img/main/c3.png"
import main from "./assets/img/main/h1.png"
import main1 from "./assets/img/main/main1.jpeg"
import main2 from "./assets/img/main/main2.jpeg"

import SliderPage from "./arrow";
import Select from "react-select";
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import  { useEffect , useState ,useRef} from 'react';
import styles from './style.module.css';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function MyComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [selectedItem, setSelectedItem] = useState('option1');
  const [index, setIndex] = React.useState(0);
  const [videoRatio, setVideoRatio] = useState("4_3");

  

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


  return (
    <div className={styles.land}>
      <Navbar></Navbar>
      <body>
        <div>
          <SliderPage />
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
            <li>
              <h4 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['mr-8']} ${styles['mt-4']} ${styles['text-right']} ${styles['right-250']}`}>بوفه های سازمان</h4>
            </li>
          </ul>
          <div className={styles.content}>
            <div className={`${styles['content-item']} ${selectedItem === 'تمام بوفه ها' ? styles.active : ''}`}>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img1} alt="Image 1" />
                  <h4>بوفه شماره ۱</h4>
                </div>
              </a>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img2} alt="Image 2" />
                  <h4>بوفه شماره ۲</h4>
                </div>
              </a>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img3} alt="Image 3" />
                  <h4>بوفه شماره ۳</h4>
                </div>
              </a>
              <div className={styles['flex-item']}>
                <img src={img4} alt="Image 4" />
                <h4>بوفه شماره ۴</h4>
              </div>
            </div>
            <div className={`${styles['content-item']} ${selectedItem === 'Item 2' ? styles.active : ''}`}>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img5} alt="Image 5" />
                  <h4>بوفه شماره ۱</h4>
                </div>
              </a>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img3} alt="Image 6" />
                  <h4>بوفه شماره ۲</h4>
                </div>
              </a>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img2} alt="Image 7" />
                  <h4>بوفه شماره ۳</h4>
                </div>
              </a>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img1} alt="Image 8" />
                  <h4>بوفه شماره ۴</h4>
                </div>
              </a>
            </div>
            <div className={`${styles['content-item']} ${selectedItem === 'Item 3' ? styles.active : ''}`}>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img4} alt="Image 9" />
                  <h4>بوفه شماره ۱</h4>
                </div>
              </a>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img2} alt="Image 10" />
                  <h4>بوفه شماره۲</h4>
                </div>
              </a>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img5} alt="Image 11" />
                  <h4>بوفه شماره ۳</h4>
                </div>
              </a>
              <a href="#">
                <div className={styles['flex-item']}>
                  <img src={img3} alt="Image 12" />
                  <h4>بوفه شماره ۴</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default MyComponent;
function Arrow(props) {
const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
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

