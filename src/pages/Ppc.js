import React from 'react'
import { Helmet } from 'react-helmet'
import NavigationBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from 'react-bootstrap'
import ppc from '../images/ppc.png';
import Whatsapp from '../components/Whatsapp'


const Ppc = () => {
    const handlebtn=()=>{
        window.location.href="/contact"
    }
  return (
    <div>
            <Whatsapp/>
         <Helmet>
                <title>PPC agency in Dubai, google ads services in UAE.</title>
                <meta name="description" content= "Deliver targeted results and maximize online visibility with our expert PPC services. Drive quality traffic and achieve your business goals effectively." />
            </Helmet>
             <NavigationBar />
        <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <img src={ppc} alt='err' />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>PAY-PER-CLICK (PPC)</span> <span className='title-orange'>ADVERTISING</span></h1>
                    <p>Precision and Impact: Transform Your Reach with Google Ads and Digital Advertising</p>
                    <p>Explore new horizons and reach your target audience with pinpoint accuracy through our Google Ads and Digital Advertising services. At Al KAtef IT Solutions, we specialize in creating strategic campaigns that optimize ad spend, maximize ROI, and drive conversions.</p>
                    <p>Targeted Google Ads campaigns for increased visibility</p>
                    <p>Comprehensive digital advertising strategies tailored to your business goals</p>
                    <p>Continuous monitoring and optimization for optimal performance</p>
                    <p>Data-driven insights to refine and enhance future campaigns</p>
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

export default Ppc
