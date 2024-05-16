import React, { useState, useRef } from "react";
import Slider from "react-slick";
import img1 from "./assets/img/main/c9.svg";
import img2 from "./assets/img/main/c8.png";
import img3 from "./assets/img/main/c10.jpeg";
import img4 from "./assets/img/main/c4.png";
import img5 from "./assets/img/main/c5.png";
import img6 from "./assets/img/main/c7.svg";
import "./style.css";

const AutoPlayMethods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] = useState([
    // Define your product list here
  ]);
  const [ratingFilter, setRatingFilter] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };


  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value);
    setRatingFilter(selectedRating === 0 ? null : selectedRating);
  };
  return (
    <div className="slider-container items-center justify-between">
      

      <ul className="m-navbar">
      <li >
          <select value={ratingFilter || 0} onChange={handleRatingChange}>
            <option value={0}>امتیاز</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </li>
        
        <li className={`m-navbar-item `}>تمام سازمان ها</li>
        <li>
        <input
        type="text"
        placeholder="جستجو"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="search-bar mx-6 my-2"
      />
          {productList
            .filter(
              (product) =>
                (searchTerm === "" ||
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (ratingFilter === null || product.rate === ratingFilter)
            )
            .map((product, key) => (
              <div
                key={key}
                className="bg-white p-2 mb-2 rounded-md flex items-start"
                style={{ border: "1px solid rgb(38, 87, 124)" }}
              >
                <p>{product.name}</p>
              </div>
            ))}
        </li>
        
        <li>
          <h4 className="text-2xl font-bold mr-8 mt-4 text-right right-250">
            سازمان ها
          </h4>
        </li>
      </ul>

      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider class="sslide" ref={sliderRef} {...settings}>
        <div className="slider-slide">
          <img src={img2} alt="coffee" />
        </div>
        <div className="slider-slide">
          <img src={img1} alt="coffee" />
        </div>
        <div className="slider-slide">
          <img src={img3} alt="coffee" />
        </div>
        <div className="slider-slide">
          <img src={img4} alt="coffee" />
        </div>
        <div className="slider-slide">
          <img src={img5} alt="coffee" />
        </div>
        <div className="slider-slide">
          <img src={img6} alt="coffee" />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlayMethods;