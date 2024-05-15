import React from 'react';
import '../styles/Offer.css';
import TopWave from '../images/offer_top_wave.svg';
import { Link } from 'react-router-dom';
import RocketImg from '../images/rocket.png';
import ofrimg1 from '../images/offerimg1.jpg';
import ofrprntr from '../images/ofrPrinter.png';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Offer() {
    const navigate = useNavigate()

    const handleContact=()=>{
        navigate('/contact')
    }
    const handlehome=()=>{
        navigate('/')
    }
    
    return (
        <div className='offer-top'>
      
            <div className='offer-top-contents'>
                <div className='offer-content-left'>
                    <img className='rocket_img' src={RocketImg} alt=''/>
                    <p className='special-offers'>SPECIAL OFFERS</p>
                    <div className='monthly-sale'>
                        <p className='white-bold-offer'>Save 75% On   </p>
                        <p className='white-bold-offer'>Total Monthly Cost</p>
                        <img src={ofrprntr} alt="" />

                    </div>
                    <p className='offer-top-p'>Experience the pinnacle of cost-effective efficiency with our exclusive printer rental offer, which includes not only the printer but also toner, spare parts, consumables, and full maintenance services, all for the incredible price of 100 AED. Elevate your workplace dynamics with our printers' dependability and performance, guaranteeing that every document is generated with precision and clarity while staying within your budget.</p>
                    <div className='offer-buttons'>
                    <button className='offer-btn' onClick={handleContact}>Contact</button>
                    <button className='offer-btn' onClick={handlehome}>Home Page</button>
                    </div>
                </div>
                <div className='offer-content-right'>
                    <div className='offer-top-right-box'>
                        <p className='special-offer-right'>Mega offer</p>                    
                        <div className='super-sale-right'>
                            <p className='super-right'>Grab a printer</p>
                            <p className='sale-right'>for @ 100 <br/> AED</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='offer-top-img-container'>
                <img src={TopWave} alt='err' />
            </div>
        </div>
    );
}

export default Offer;
