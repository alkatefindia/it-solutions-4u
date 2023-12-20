import React from 'react'
import "../styles/Home2.css"
import { useNavigate } from 'react-router-dom';


const ServicesBox = ({img,desc,title,redirect,alttxt}) => {
  const navigate = useNavigate();


    const handleButtonClick = () => {
        navigate(redirect);
      };

  return (
    <div className='services-box p-3'>
        <div className=''>
        <img className='mt-2' src={img} width={100} height={100} alt={alttxt} />
        <h4 className='mt-4'>{title}</h4>
        <p className='mt-4'>{desc}</p>
        <button onClick={handleButtonClick} className='btn btn-success rounded-4 mt-3 '>Learn More</button>
        </div>
    </div>
  )
}

export default ServicesBox