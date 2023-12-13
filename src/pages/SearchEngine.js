import React from 'react'
import NavigationBar from '../components/Navbar'
import SerImg from '../images/search-engine.png';
import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Whatsapp from '../components/Whatsapp';


const SearchEngine = () => {
  const handlebtn=()=>{
    window.location.href="/contact"
}
  return (
    <div>
            <Whatsapp/>

         <Helmet>
                <title>Optimize Your Online Presence with Expert SEO Services | AL KATEF IT SOLUTIONS</title>
                <meta name="description" content= "Elevate your brand's visibility with our advanced SEO services. Our experts employ strategic techniques tailored for businesses in the UAE, ensuring your website ranks high in relevant searches. Contact us for customized solutions." />
            </Helmet>
        <NavigationBar />
        <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <img src={SerImg} alt='err' />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>SEARCH ENGINE</span> <span className='title-orange'>OPTIMIZATION</span></h1>
                    <p>Optimize and Elevate Your Online Presence with Expert SEO Services</p>
                    <p>Welcome to AL KATEF IT SOLUTIONS, your partner in achieving online visibility and success through advanced Search Engine Optimization (SEO) services. Our team of seasoned experts employs cutting-edge techniques to ensure your website stands out in search engine results, driving targeted traffic and maximizing your online impact.</p>
                    <p>Strategic keyword optimization for enhanced visibility</p>
                    <p>Regular monitoring and adaptation to evolving search engine algorithms</p>
                    <p>On-page and off-page optimization for comprehensive results</p>
                    <p>Localized SEO strategies for businesses in the UAE</p>
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

export default SearchEngine
