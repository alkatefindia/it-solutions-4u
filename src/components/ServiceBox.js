import React from 'react';
import '../styles/Servicebox.css';
import { useNavigate } from 'react-router-dom';

const ServiceBox = ({ imageSrc, buttonText, serviceTitle, redirect }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(redirect);
  };

  return (
    <div className="service-box">
      <img src={imageSrc} alt="Service" className="service-image" />
      <p className='service-box-title'>{serviceTitle}</p>
      <button onClick={handleButtonClick} className="service-button">{buttonText}</button>
    </div>
  );
};

export default ServiceBox;
