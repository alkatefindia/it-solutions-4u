import React from 'react'
import { useParams } from 'react-router-dom';
import '../styles/productdetails.css';
import { Helmet } from 'react-helmet';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

function ConsumableDetail({consumables}) {
    const { consumableName } = useParams();
    const consumable = consumables.find(p => p.consumableName === consumableName);

    if (!consumable) {
        return <div>Product not found</div>;
      }

      const whatsappMessage = `I am interested in Consumable ${consumable.brand} ${consumable.consumableName}`;

      const handleWhatsAppClick = () => {
        const phoneNumber = '+971557089199'; // Specify the WhatsApp number
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
      };

  return (
    <div>
        <Helmet>
          <title>No #1 Printer Consumable in UAE - Dubai, Abu Dhabi</title>
          <meta name="description" content='Alkatef one of the most reasonable prices in the market, our company carries a wide range of consumables; toner, drum, developer, cleaning blade and spares parts' />
        </Helmet>
        <NavigationBar />
      <div className='product-details'>
        <div className='product-img-section'>
          <img src={consumable.image} alt={consumable.consumableName} />
        </div>
        <div className='product-details-section'>
          <h2>{consumable.consumableName}</h2>
          <p>Product Name: <span className='product-detail-style'>{consumable.consumableName}</span></p>
          <p>Brand: <span className='product-detail-style'>{consumable.brand}</span></p>
          <p>Life/Yield: <span className='product-detail-style'>{consumable.lifeYield}</span></p>
          <p>Toner Part Name: <span className='product-detail-style'>{consumable.TonerPartName}</span></p>
          <p>Colour: <span className='product-detail-style'>{consumable.colour}</span></p>
          <button onClick={handleWhatsAppClick}>
          WhatsApp Chat
        </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ConsumableDetail
