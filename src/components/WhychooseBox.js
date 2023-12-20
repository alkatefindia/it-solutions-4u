import React from 'react';
import '../styles/WhychooseBox.css'


function WhychooseBox({ whychoosetitle,whychoosedesc,whychooseimg,alttxt }) {
    return (
        <div className='why-choose-box'>
            <div className='why-choose-img-parent'>
                <div className='why-choose-img-box'><img src={whychooseimg} alt={alttxt} /></div>
            </div>
            <p className='why-choose-title'>{whychoosetitle}</p>
            <p className='why-choose-desc'>{whychoosedesc}</p>
        </div>
    );
}

export default WhychooseBox;