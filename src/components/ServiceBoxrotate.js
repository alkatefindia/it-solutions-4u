import React from 'react';
import '../styles/ServiceBoxrotate.css'

const ServiceBoxrotate = ({ imageSrc, serviceContent, boxRottitle }) => {
  return (
    <div className="box-container">
      <div className="box">
        <div className="front">
          <div className="title">{boxRottitle}</div>
          <img className='box-container-img' src={imageSrc} alt="err" />
        </div>
        <div className="back">
          <p>{serviceContent}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBoxrotate;
