import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/productdetails.css';
import { Helmet } from 'react-helmet';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductDetail({ products }) {
  const { model } = useParams();
  const product = products.find(p => p.model === model);

  if (!product) {
    return <div>Product not found</div>;
  }

  const whatsappMessage = `I am interested in Product ${product.brandName} ${product.model}`;

  const handleWhatsAppClick = () => {
    const phoneNumber = '+971557089199'; // Specify the WhatsApp number
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <Helmet>
        <title>{product.metatitle}</title>
        <meta name="description" content={product.metadesc} />
      </Helmet>
      <NavigationBar />
      <div className='product-details'>
        <div className='product-img-section'>
          <img src={product.printerImage} alt={product.model} />
        </div>
        <div className='product-details-section'>
          <h2>{product.printerName}</h2>
          <p>Brand: <span className='product-detail-style'>{product.brandName}</span></p>
          <p>Model: <span className='product-detail-style'>{product.model}</span></p>
          <p>PPM: <span className='product-detail-style'>{product.PPM}</span></p>
          <p>Page Size Supported: <span className='product-detail-style'>{product.pageSize}</span></p>
          <p>Printer Type: <span className='product-detail-style'>{product.printerType}</span></p>
          <p>Warranty: <span className='product-detail-style'>{product.warranty}</span></p>
          <button onClick={handleWhatsAppClick}>
          WhatsApp Chat
        </button>
        </div>
      </div>
      <div className='desc-container'>
        <h5>Description</h5>
        <p>{product.desc}</p>
      </div>
      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  );
}

export default ProductDetail;