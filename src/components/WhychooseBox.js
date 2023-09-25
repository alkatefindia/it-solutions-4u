import React from 'react';
import '../styles/WhychooseBox.css'


function WhychooseBox({ whychoosetitle,whychoosedesc,whychooseimg }) {
    return (
        <div className='why-choose-box'>
            <div className='why-choose-img-parent'>
                <div className='why-choose-img-box'><img src={whychooseimg} alt='err' /></div>
            </div>
            <p className='why-choose-title'>{whychoosetitle}</p>
            <p className='why-choose-desc'>{whychoosedesc}</p>
        </div>
    );
}

export default WhychooseBox;