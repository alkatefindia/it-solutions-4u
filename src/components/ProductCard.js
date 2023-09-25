import React from 'react';
import '../styles/PrinterCard.css';

function ProductCard({printerName,brandName,model,printerImage}) {
    return (
        <div className='printer-card'>
            <img src={printerImage} alt='err' />
            <div className='printer-card-txt'>
                <h5>{printerName} <span>{model}</span></h5>
                <p>Brand: <span>{brandName}</span></p>
            </div>
        </div>
    )
}

export default ProductCard;
