import React from 'react'
import { Helmet } from 'react-helmet'
import NavigationBar from '../components/Navbar'
import { Button } from 'react-bootstrap'
import Footer from '../components/Footer'
import ppc from '../images/content-mrkt.png';
import Whatsapp from '../components/Whatsapp'


const Contentmrkt = () => {

    const handlebtn=()=>{
        window.location.href="/contact"
    }
  return (
    <div>
            <Whatsapp/>

       <Helmet>
                <title>Elevate Your Brand with Captivating Content Marketing | AL KATEF IT SOLUTIONS</title>
                <meta name="description" content=  "Crafting compelling content that resonates with your audience. Our Content Marketing services enhance online authority, engage your audience, and contribute to improved search rankings. Connect with our content experts now."/>
            </Helmet>
             <NavigationBar />
        <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <img src={ppc} alt='err' />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>Content </span> <span className='title-orange'>Marketing</span></h1>
                    <p> Captivate Your Audience: Elevate Your Brand with Expert Content Marketing</p>
                    <p>Content is king, and at AL KATEF IT SOLUTIONS, we understand the art of crafting compelling and informative content that resonates with your audience. Our Content Marketing services are designed to enhance your online authority, engage your audience, and contribute to improved search rankings.</p>
                    <p>Customized content strategies aligned with your brand and target audience</p>
                    <p>Creation of high-quality, shareable content</p>
                    <p>Blog management and regular content updates</p>
                    <p>Content optimization for search engines</p>
                    {/* <p>Why Choose Our SEO Services? Our SEO services go beyond the conventional to provide a customized approach that aligns with your business goals. With a commitment to staying ahead in the digital landscape, we ensure your website ranks high in relevant searches, giving you a competitive edge in the online arena.</p> */}
                    <Button onClick={handlebtn} variant="primary">Contact Us</Button>
                </div>
            </div>


            <section className='footer-section'>
        <Footer />
      </section>
    </div>
  )
}

export default Contentmrkt
