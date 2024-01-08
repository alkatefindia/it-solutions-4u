import React from 'react'
import "../styles/PortfolioBox.css"
import { Link } from 'react-router-dom'

const PortfolioBox = ({ imageSrc, boxRottitle,boxbtn1,boxbtn2 ,redirect}) => {
  return (
        
    <div className="website-pro">
      <img src={imageSrc} alt='website potfolio'/>
    <div className='porjects-title'> 
    <div className='all-btn'>

    <div className='title-btn'>
   <Link to={redirect}> <h4 className='text-white'>{boxRottitle}</h4></Link>
      <button className=' btn text-white btn-light me-2'>{boxbtn1}</button> 
      <button className='  btn text-white btn-light'>{boxbtn2}</button> 
    </div>
    <div><button className='arrow-btn'><i class="fa-solid fa-arrow-right"></i></button></div>
    </div>

    </div>
    </div>

  )
}

export default PortfolioBox