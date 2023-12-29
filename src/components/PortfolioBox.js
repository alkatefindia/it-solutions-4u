import React from 'react'
import "../styles/PortfolioBox.css"

const PortfolioBox = ({ imageSrc, boxRottitle,boxdesc }) => {
  return (
    <div className='portfolio-content'>
        
    <div className="website-pro">
    <div className='porjects-title'><h2 className='text-white fw-bolder'>Website</h2>
    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

    <div><button className='btn border border-1 btn-light'>View</button> </div>
    </div>
    <div className="website-content ">

    </div>

    </div>
    <div className="Digital-pro">
    <div className='porjects-title'><h2 className='text-white fw-bolder'>Digital Marketing</h2>
    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

    <div><button className='btn border border-1 btn-light'>View</button> </div>
    </div>

    <div className="Digital-content title-blue">
    

    </div>

    </div>
    <div className="Mobile-pro">
    <div className='porjects-title'><h2 className='text-white fw-bolder'>Mobile App</h2>
    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

    <div><button className='btn border border-1 btn-light'>View</button> </div>
    </div>

    <div className="Mobile-content title-blue">
   

    </div>

    </div>
    <div className="SEO-pro">
    <div className='porjects-title'><h2 className='text-white fw-bolder'>SEO</h2>
    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    <div><button className='btn border border-1 btn-light'>View</button> </div>
    </div>
    <div className="SEO-content title-blue">
    

    </div>

    </div>

  </div>
  )
}

export default PortfolioBox