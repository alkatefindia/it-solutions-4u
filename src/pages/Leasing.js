import React from 'react';
import NavigationBar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import LeaseImg from '../images/Leasing_page.png'
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import { Helmet } from 'react-helmet';
import {useNavigate} from 'react-router-dom'
import Navbar2 from '../components/Navbar2';

function Leasing() {
    const navigate =useNavigate()

    const handleContact =()=>{
        navigate('/contact')
    }

    return (
        <div>
            <Whatsapp/>
            <Helmet>
                <title>Abu Dhabi's Leading Digital Solutions: Lease Printers, Plotters,Tablets</title>
                <meta name="description" content=  " Abu Dhabi's premier digital solutions – lease state-of-the-art printers,plotters, and tablets with flexible plans for optimal business efficiency and productivity"/>
            </Helmet>

            {/* <NavigationBar /> */}
                 <Navbar2/>

            <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <img src={LeaseImg} alt='rental services' />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>Rental</span> <span className='title-orange'>SERVICE</span></h1>
                    <p>Custom IT Solutions for Your Successful Business</p>
                    <p>Leasing is our most popular and our most flexible services that involves renting of a product, mainly printers. To read more, we request you to visit our website (Digitalcopier.ae)</p>
                    <p>Printer leasing</p>
                    <p>Plotter leasing</p>
                    <p>PCs leasing</p>
                    <p>Flat Panels leasing</p>
                    <p>Computers leasing</p>
                    <p>Tablets leasing</p>
                    <Button onClick={handleContact} variant="primary">Contact Us</Button>
                </div>
            </div>
            <section className='footer-section'>
                <Footer />
            </section>
        </div>
    )
}

export default Leasing
