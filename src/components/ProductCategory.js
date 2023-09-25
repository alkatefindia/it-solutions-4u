import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/ProductCategory.css';

function ProductCategory({ productName, productImage, productLink }) {
  const navigate = useNavigate(); 

  const handleViewNowClick = () => {
    
    navigate(productLink);
  };

  return (
    <div className='product-category-card'>
      <div className='product-category-inner'>
        <div className='image-container'>
          <button className='orange-button'>{productName}</button>
          <img src={productImage} alt='err' />
        </div>
      </div>
      <div className='product-category-txt'>
        <span className='product-category-link' onClick={handleViewNowClick}>
          View Now
        </span>
      </div>
    </div>
  );
}

export default ProductCategory;
