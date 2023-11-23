import React from 'react'
import "../styles/productsDropdown.css"

const ProductsDropdown = ({ 
   isProductsDropdownOpen,
  handleProductsDropdown }) => {

  return (
    <div className={`products-dropdown-menu ${
      isProductsDropdownOpen ? "visible" : ""
    }`}
    onMouseEnter={() => handleProductsDropdown(true)}
    onMouseLeave={() => handleProductsDropdown(false)}>
        
    </div>
  )
}

export default ProductsDropdown