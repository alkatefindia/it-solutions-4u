import React from 'react'
import { Helmet } from 'react-helmet'
import NavigationBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from 'react-bootstrap'
import ppc from '../images/ppc.png';


const Ppc = () => {
    const handlebtn=()=>{
        window.location.href="/contact"
    }
  return (
    <div>
         <Helmet>
                <title>Precision and Impact: Transform Reach with Google Ads | AL KATEF IT SOLUTIONS</title>
                <meta name="description" content= "Maximize ROI and drive conversions with our Google Ads and Digital Advertising services. Our strategic campaigns and continuous optimization ensure your business stands out in the digital landscape. Discover the impact today." />
            </Helmet>
             <NavigationBar />
        <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <img src={ppc} alt='err' />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>PAY-PER-CLICK (PPC)</span> <span className='title-orange'>ADVERTISING</span></h1>
                    <p>Precision and Impact: Transform Your Reach with Google Ads and Digital Advertising</p>
                    <p>Explore new horizons and reach your target audience with pinpoint accuracy through our Google Ads and Digital Advertising services. At [Your Company Name], we specialize in creating strategic campaigns that optimize ad spend, maximize ROI, and drive conversions.</p>
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
