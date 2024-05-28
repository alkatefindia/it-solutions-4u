import React from 'react';
import NavigationBar from '../components/Navbar';
import WebsolnImg from '../images/computer.svg';
import '../styles/web_soln.css'
import { Button } from 'react-bootstrap';
import BFB from '../images/BFB_icon.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import { Helmet } from 'react-helmet';
import responsive from "../images/responsive.svg";
import choosing from "../images/choosing.svg";
import service from "../images/service.svg"
import Navbar2 from '../components/Navbar2';



function web_soln() {
    return (
        <div>
            <Whatsapp/>
            {/* <NavigationBar /> */}
      <Navbar2/>

            <Helmet>
                <title>website solutions we provide as a Web Design Company In Abu Dhabi</title>
                <meta name="description" content=  "Use our professional web design services in Abu Dhabi to improve your online visibility. custom websites that inspire, grab attention, and promote success. Come with us as we create your digital masterpiece."/>
            </Helmet>
            <div className='container mt-4 '><h1><span className='title-blue'>Craft Your Perfect Online Presence:</span> <span className='title-orange'>Website Platforms and CMS Solutions in UAE</span></h1></div>

            <div className='web-soln-top-img-container'>
                    <img src={WebsolnImg} alt='err' />
                </div>
            <div className='container mt-5'><h3><span className='title-blue'> Navigate the digital landscape with expert guidance. Choose the ideal platform and content management system to empower your UAE business.</span></h3></div>

            <div className='web-soln-top container'>
               
                <div className='web-soln-top-txt-container'>
                    <p> <b>Static Websites:</b> Ideal for simple online brochures, portfolios, or landing pages. Easy to maintain but limited in functionality.</p>
                    <p> <b>Dynamic Websites:</b> Built with CMS, these offer powerful features, scalability, and content management flexibility.</p>
                    <p> <b>E-commerce Platforms:</b>Dedicated platforms for online stores, offering shopping cart, payment gateway, and product management capabilities.</p>
                    <h5>Popular CMS platforms in UAE:</h5>
                    <p> <b>WordPress: </b> Widely used, user-friendly, and boasts a vast plugin ecosystem for diverse functionalities.</p>
                    <p> <b>Drupal: </b> Secure and scalable, preferred for complex websites with multiple users and content editors.</p>
                    <p> <b>Joomla:</b> Flexible and feature-rich, suitable for multilingual websites and community-driven platforms.</p>
                    <p> <b>Shopify:</b> Leading e-commerce platform, offering comprehensive shop management tools and integrations.</p>
                    

                    <Button variant="primary">Contact Us</Button>
                </div>
            </div>
            
            <div className='responsive-design  container mt-5'>
                <div>
            <h3><span className='title-blue'>Responsive Design:</span></h3>
            <p><b>Importance:</b>In today's mobile-first world, a responsive website adapts seamlessly across devices, desktops to smartphones.</p>
            <p><b>Benefits:</b>Enhanced user experience, improved search engine ranking, and increased leads and conversions.</p>
            <p><b>Our Expertise:</b> We design and develop websites with mobile-first approach, ensuring optimal performance on all screens.</p>
            </div>
            <div className='d-flex justify-content-center align-items-center '>
                <img src={responsive} width={'75%'} alt="" />
            </div>
            </div>

            <div className='platform-design container d-flex  mt-5'>
            <div className='image-none'>
                <img src={choosing} width={'75%'} alt="" />
            </div>
                <div>
            <h3><span className='title-blue'>Choosing the Right Platform:</span></h3>
            <p><b>Your Business Needs:</b> What are your website's goals and functionalities? Analyze your needs and choose a platform that scales with your growth.</p>
            <p><b>Technical Expertise:</b> Do you have in-house resources for CMS management? Consider platform complexity and learning curve.</p>
            <p><b>Budget:</b> Different platforms offer varying pricing models and maintenance costs, choose one that suits your budget.</p>
            </div>
            <div className='image-none1 '>
                <img src={choosing} width={'75%'} alt="" />
            </div>
            
            </div>

            <div className='platform-design container d-flex  mt-5'>
                <div>
            <h3><span className='title-blue'>Services:</span></h3>
            <p><b>Platform Consultation:</b> We help you determine the ideal platform based on your specific requirements.</p>
            <p><b>CMS Implementation & Training:</b> We set up your chosen CMS and train your team for efficient content management.</p>
            <p><b>Ongoing Maintenance & Support:</b> We offer comprehensive support to keep your website secure, updated, and running smoothly.</p>
            <p><b>Website Design & Development:</b>  We craft customized websites for any platform, ensuring mobile responsiveness and best practices.</p>


            </div>
            <div className='d-flex justify-content-center align-item-center'>
                <img src={service} width={'65%'} alt="" />
            </div>
            </div>
            <div className='platform-design container d-flex  mt-5'>
                <div>
            <h3><span className='title-blue'>Call to Action:</span></h3>
            <p>Schedule a Free Consultation with our IT experts to discuss your unique website needs.Read our blog post: "Top 5 CMS Platforms for UAE Businesses in 2024."</p>


            </div>
            </div>

            <div className='web-soln-bottom mt-5'>
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