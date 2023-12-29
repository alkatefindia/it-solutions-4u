import React, { useState } from 'react';
import Slider from 'react-slick';
import front from '../images/DM.png';
import front1 from '../images/P.png';
import front2 from '../images/it-sol.png';
import '../styles/FrontSlider.css';

const FrontSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow:3,
    speed: 500,
    autoplay: true,
    cssEase: 'ease-in-out',
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ],
  };

  const getScaleValue = (index) => (index === currentIndex ? 1.5 : 1);

  return (
    <div className='d-flex justify-content-center align-items-center '>
      <Slider {...settings}>
        <div className="slider-item" style={{ transform: `scale(${getScaleValue(0)})` }}>
          <img src={front}  alt="" />
        </div>
        <div className="slider-item" style={{ transform: `scale(${getScaleValue(1)})` }}>
          <img src={front1}  alt="" />
        </div>
        <div className="slider-item" style={{ transform: `scale(${getScaleValue(2)})` }}>
          <img src={front2}  alt="" />
        </div>
        <div className="slider-item" style={{ transform: `scale(${getScaleValue(3)})` }}>
          <img src={front}  alt="" />
        </div>
        <div className="slider-item" style={{ transform: `scale(${getScaleValue(4)})` }}>
          <img src={front1}  alt="" />
        </div>
        <div className="slider-item" style={{ transform: `scale(${getScaleValue(5)})` }}>
          <img src={front2}  alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default FrontSlider;
