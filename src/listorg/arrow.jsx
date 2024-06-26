import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import './FlexLayout.css';
import axios from "axios";

const AutoPlayMethods = () => {
  const [items, setItems] = useState([]);

  const fetchDataFromURL = async () => {
    const token = 'JWT ' + localStorage.getItem("token");

    try {
      const response = await axios.get('https://ghablameh.fiust.ir/api/v1/buffets/', {
        headers: {
          Authorization: token
        }
      });

      // console.log('Data retrieved:', response.data);
      // Assuming the response data is an array of objects with `name` and `organization` properties
      setItems(response.data);

    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromURL();
  }, []);

  const sliderRef = useRef(null);

  useEffect(() => {
    const play = () => {
      sliderRef.current?.slickPlay();
    };

    const pause = () => {
      sliderRef.current?.slickPause();
    };

    play();

    return () => {
      pause();
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };

  return (
    <div className="slider-container m-10">
      
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />


      <Slider className="sslide" ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slider-slide">
            <h3>{item.name}</h3>
            <p>{item.organization_name}</p>
            {/* <p>{item.created_at}</p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlayMethods;
