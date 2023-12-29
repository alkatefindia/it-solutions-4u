import React from 'react'
import '../styles/Whatsapp.css'
import whatsapp from "../images/whatsapp.png"

const Whatsapp = ({premsg}) => {
  const phoneNumber = '+971556449916';
  const predefinedMessage = premsg || '';

    
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(predefinedMessage)}`;

  return (
    <a href={whatsappLink} className='whatsapp' target="_blank" rel="noopener noreferrer">
        
        <img src={whatsapp} alt="whatsapp connect" />
    </a>
  )
}

export default Whatsapp