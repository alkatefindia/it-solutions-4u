import React from 'react'
import NavigationBar from '../components/Navbar'
import SocialImg from '../images/socialmedia.png';
import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Whatsapp from '../components/Whatsapp';

const SocialMedia = () => {
  const handlebtn=()=>{
    window.location.href="/contact"
}
  return (
    <div>
            <Whatsapp/>

         <Helmet>
                <title>best social media marketing services in Abu Dhabi.</title>
                <meta name="description" content= "Get the best social media marketing services in Abu Dhabi to grow your brand. Professional techniques designed to achieve success. Boost your internet visibility right now!" />
            </Helmet>
             <NavigationBar />
        <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <img src={SocialImg} alt='err' />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>SOCIAL MEDIA</span> <span className='title-orange'>MARKETING</span></h1>
                    <p>Connect, Engage, and Thrive with Social Media Marketing Excellence</p>
                    <p>At AL KATEF IT SOLUTIONS, we recognize the power of social media in shaping brand identity and connecting with your audience. Our Social Media Marketing services are designed to elevate your brand presence, foster engagement, and build a community around your business.</p>
                    <p>Tailored social media strategies for platforms like Facebook, Instagram, and Twitter</p>
                    <p>Engaging content creation and curation</p>
                    <p>Targeted social media advertising campaigns</p>
                    <p>Community building and customer interaction</p>
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

export default SocialMedia
