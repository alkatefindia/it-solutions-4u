import React from 'react'
import '../styles/Whatsapp.css'
import whatsapp from "../images/18ba0e411b1586feb65e97d7deb45b5d.png"

const Whatsapp = ({premsg}) => {
  const phoneNumber = '+971556449916';
  const predefinedMessage = premsg || '';

    
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(predefinedMessage)}`;

  return (
    <a href={whatsappLink} className='whatsapp' target="_blank" rel="noopener noreferrer">
        
        <img src={whatsapp} alt="" />
    </a>
  )
}

export default Whatsapp