import React from 'react';
import NavigationBar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import LeaseImg from '../images/Leasing_page.png'
import Footer from '../components/Footer';

function Leasing() {
    return (
        <div>
            <NavigationBar />
            <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <img src={LeaseImg} alt='err' />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h3><span className='title-blue'>LEASING</span> <span className='title-orange'>SERVICE</span></h3>
                    <p>Custom IT Solutions for Your Successful Business</p>
                    <p>Leasing is our most popular and our most flexible services that involves renting of a product, mainly printers. To read more, we request you to visit our website (Digitalcopier.ae)</p>
                    <p>Printer leasing</p>
                    <p>Plotter leasing</p>
                    <p>PCs leasing</p>
                    <p>Flat Panels leasing</p>
                    <p>Computers leasing</p>
                    <p>Tablets leasing</p>
                    <Button variant="primary">Contact Us</Button>
                </div>
            </div>
            <section className='footer-section'>
                <Footer />
            </section>
        </div>
    )
}

export default Leasing
