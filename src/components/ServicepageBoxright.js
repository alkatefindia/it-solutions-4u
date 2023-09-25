import React from 'react';
import '../styles/ServicepageBox.css';

function ServicepageBoxright({ServiceImg, ServiceTitle, ServiceDesc}) {
  return (
    <div className='service-page-left '>
            <div className='service-page-left-txt'>
                <h4>{ServiceTitle}</h4>
                <p>{ServiceDesc}</p>
            </div>
            <img className='service-page-left-img' src={ServiceImg} alt='err' />
        </div>
  )
}

export default ServicepageBoxright
