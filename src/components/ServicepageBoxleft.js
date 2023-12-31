import React from 'react'
import '../styles/ServicepageBox.css';

function ServicepageBoxleft({ServiceImg, ServiceTitle, ServiceDesc,alttxt}) {
    return (
        <div className='service-page-left xyz'>
            <img className='service-page-left-img' src={ServiceImg} alt={alttxt} />
            <div className='service-page-left-txt'>
                <h4>{ServiceTitle}</h4>
                <p>{ServiceDesc}</p>
            </div>
        </div>
    )
}

export default ServicepageBoxleft