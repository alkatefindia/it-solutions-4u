import React from 'react';
import NavigationBar from '../components/Navbar';
import { consumables } from '../products/ConsumableData';
import ProductCard from '../components/ProductCard';
import '../styles/Printer.css';
import '../styles/Consumables.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Consumables() {
    return (
        <div>
            <Helmet>
                <title>No #1 Printer Consumable in UAE - Dubai, Abu Dhabi</title>
                <meta name="description" content='Alkatef one of the most reasonable prices in the market, our company carries a wide range of consumables; toner, drum, developer, cleaning blade and spares parts' />
            </Helmet>
            <NavigationBar />
            <div className='printer-title'>
                <h1>CONSUMABLES</h1>
                <p>If you got any questions, please do not hesitate to send us a message. We reply within 24 hours !</p>
            </div>
            <div className="consumables-list">
                <div className='consumable-container'>
                    {consumables.map((consumable, index) => (
                        <Link className='link_none' target="_blank" key={consumable.consumableName} to={`/consumables/${consumable.consumableName}`}>
                            <ProductCard
                                printerName={consumable.consumableName}
                                brandName={consumable.brand}
                                printerImage={consumable.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Consumables;
