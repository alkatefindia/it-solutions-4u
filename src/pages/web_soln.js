import React from 'react';
import NavigationBar from '../components/Navbar';
import WebsolnImg from '../images/web_soln_page.png';
import '../styles/web_soln.css'
import { Button } from 'react-bootstrap';
import BFB from '../images/BFB_icon.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';

function web_soln() {
    return (
        <div>
            <Whatsapp/>
            <NavigationBar />
            <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <img src={WebsolnImg} alt='err' />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h3><span className='title-blue'>WEBSITE</span> <span className='title-orange'>SOLUTIONS</span></h3>
                    <p>Custom IT Solutions for Your Successful Business</p>
                    <p>Our web development team specialized in creating unique websites that will convert your visitors to your clients.</p>
                    <p>Optimizing your websites for speed</p>
                    <p>Accessibility for mobile viewing</p>
                    <p>UX and UI designing</p>
                    <Button variant="primary">Contact Us</Button>
                </div>
            </div>
            <div className='web-soln-bottom'>
                <h2><span className='title-blue'>WEB</span> <span className='title-orange'>SERVICES</span></h2>
                <div className='card-parent'>
                    <div className='bfb-card'>
                        <img src={BFB} alt='err' />
                        <h3>Build From Built (BFB)</h3>
                        <p>A WordPress website is a website created using the WordPress content management system (CMS), which allows users to easily create, manage, and publish digital content without the need for extensive coding knowledge.</p>
                        <hr />
                        <p><i class="fa-solid fa-circle-check ico-orange"></i> Website UI Design</p>
                        <hr />
                        <p><i class="fa-solid fa-circle-check ico-orange"></i> Customizable</p>
                        <hr />
                        <p><i class="fa-solid fa-circle-check"></i> Full control</p>
                        <hr />
                        <p><i class="fa-solid fa-circle-check"></i> Scalability</p>
                    </div>

                    <div className='bfb-card'>
                        <img src={BFB} alt='' />
                        <h3>Build From Scratch (BFS)</h3>
                        <p>A website made with coding refers to a website that has been developed from scratch using programming languages such as HTML, CSS, and JavaScript, among others.</p>
                        <hr />
                        <p><i class="fa-solid fa-circle-check ico-orange"></i> Website UI Design</p>
                        <hr />
                        <p><i class="fa-solid fa-circle-check ico-orange"></i> Customizable</p>
                        <hr />
                        <p><i class="fa-solid fa-circle-check ico-orange"></i> Full control</p>
                        <hr />
                        <p><i class="fa-solid fa-circle-check ico-orange"></i> Scalability</p>
                    </div>
                </div>
            </div>
            <section className='footer-section'>
                <Footer />
            </section>
        </div>
    )
}

export default web_soln