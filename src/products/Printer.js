import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import '../styles/Printer.css';
import { Helmet } from 'react-helmet';
import ProductCard from '../components/ProductCard';
import { products } from './productData';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';

function Printer() {
  const [sortBy, setSortBy] = useState('recommended');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);
  const [filterCollapsed, setFilterCollapsed] = useState(true);

  // Function to toggle the filter section
  const toggleFilter = () => {
    setFilterCollapsed(!filterCollapsed);
  };

  const brands = ['Kyocera', 'Triumph-Adler', 'Sharp', 'Canon', 'KONICAMINOLTA', 'HP', 'Ricoh', 'UTAX', 'Brother', 'Epson'];

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortBy(selectedSort);
  };

  useEffect(() => {
    let productsToDisplay = [...products]; // Start with all products

    if (selectedBrand) {
      // Filter products based on selected brand
      productsToDisplay = productsToDisplay.filter(product => product.brandName === selectedBrand);
    }

    if (sortBy === 'latest') {
      productsToDisplay.sort((a, b) => b.model.localeCompare(a.model));
    }

    setSortedProducts([...productsToDisplay]);
  }, [sortBy, selectedBrand]);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div>
            <Whatsapp/>

      <Helmet>
        <title>Best Printer Rental in UAE, Dubai, Abu Dhabi, - Rent Now!</title>
        <meta name="description" content="Discover the UAE's most dependable printer lease and rental service. Enjoy budget-friendly monthly rates, with no maintenance expenses or upfront capital commitments. We also cover consumables for a hassle-free experience." />
      </Helmet>
      <NavigationBar />
      <div className='printer-section'>
        <div className='printer-title'>
          <h1> Types of Printers</h1>
          <p>If you got any questions, please do not hesitate to send us a message. We reply within 24 hours !</p>
        </div>
        <div className='sort-section'>
          <label htmlFor="sort-by">Sort by:</label>
          <select id="sort-by" value={sortBy} onChange={handleSortChange}>
            <option value="recommended">Default</option>
            <option value="latest">Series</option>
          </select>
        </div>
        <div className='printer-parent'>
          <div className={`printer-filter ${filterCollapsed ? 'collapsed' : ''}`}>
            <h6>FILTERS</h6>
            <hr />
            <div className='category-brand-parent'>
              <p>Categories:</p>
              <div className='category-brand'>
                {brands.map(brand => (
                  <label key={brand}>
                    <input
                      type='radio'
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={handleBrandChange}
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className='toggle-filter-button' onClick={toggleFilter}>
            {filterCollapsed ? 'Show Filters' : 'Hide Filters'}
          </div>
          <div className='printer-container'>
            {sortedProducts.map(product => (
              <Link className='link_none' target="_blank" key={product.model} to={`/product/${product.model}`}>
                <ProductCard
                  printerName={product.printerName}
                  brandName={product.brandName}
                  model={product.model}
                  printerImage={product.printerImage}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>    
      <div className='footer-section'>
        <Footer />
      </div> 
    </div>
  );
}

export default Printer;