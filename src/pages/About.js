import React from 'react';
import '../styles/About.css';
import NavigationBar from '../components/Navbar';
import Trouble from '../images/ser_rot_trouble.webp';
import Netwrkimg from '../images/ser_rot_network.webp';
import Photocpy from '../images/ser_rot_trouble_photocpy.webp';
import Telecom from '../images/ser_rot_telecom.webp';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <div>
      <Whatsapp premsg='Hi, I visited your About page and would like to learn more about your services.'/>
      <Helmet>
                <title> Digital Marketing Agency in UAE | IT Solutions</title>
                <meta name="description" content=  "With the help of our Abu Dhabi-based digital marketing agency, you may achieve outstanding results online. Boost your online visibility with professional methods and creative ideas made for the success of your brand"/>

            <link rel='canonical' href={window.location.href} ></link>
            </Helmet>
      <NavigationBar />
      <div className='about-page-container'>
        <div className='about-page-top'>
          <div className='about-page-top-img'>
            <img className='about-page-top-img-edit abt-top-1' src={Trouble} alt='err' />
            <img className='about-page-top-img-edit abt-top-2' src={Netwrkimg} alt='err' />
            <img className='about-page-top-img-edit abt-top-3' src={Photocpy} alt='err' />
            <img className='about-page-top-img-edit abt-top-4' src={Telecom} alt='err' />
          </div>
          <div className='about-page-top-txt'>
            <h1><span className='title-blue page-titles'>ABOUT</span> <span className='title-orange page-titles'>US</span></h1>
            <p>Custom IT Solutions for Your Successful Business</p>
            <p>Al Katef IT solutions is a newly developed innovative solution that was introduced to better merge with the advancing 21st century technology.</p>
            <p>We have put together a number of strategies to evolve and provide dynamic formulas to our esteemed customers in order to help them work in ease and with assurance.</p>
            <div className='years-trust-section'>
              <div className='years-trust-section-child'>
                <div className='years-trust-content'>
                  <span className='years-trust-content-num'>20+</span>
                  <span className='years-trust-content-txt'>Years of<br />EXPERIENCE</span>
                </div>
              </div>
              <div className='years-trust-section-child'>
                <div className='years-trust-content'>
                  <span className='years-trust-content-num'>50</span>
                  <span className='years-trust-content-txt'>TRUSTED<br />COMPANIES</span>
                </div>
              </div>
            </div>
            <div className='about-page-top-button-section'>
              {/* <button type="button" class="btn btn-primary">Read More</button> */}
            </div>
          </div>
        </div>
        <div className='about-page-bottom'>
          <div className='abt-page-img-container'>
            <div className='about-page-bottom-img'></div>
          </div>
          <div className='abt-page-txt-section'>
            <p>A venture with a history of 20+ years began its instigation into the corporate world in 2000. A time when the UAE was still constructing its path toward a ubiquitous position in the economy. A time when our business took its first baby steps in the market. At the time, our focus encircled around electronics, hence the name “Al Katef Electronics and Equip.” sought a spot within the UAE market. TVs, computers, and ACs, slowly shifted to printers and photocopiers. Gaining popularity in the field, our vision pivoted towards the market that involved dealing with large suppliers of photocopiers in the country, which was by the year 2005. Our services included AMC, rental, repair works, and sale of consumables and printers of a wide range of products and brands that earned us a fair share of trusted and satisfied clients.</p>
            <p>2013 was when we could identify ourselves as one of the leading retailers in the photocopier/ printer market, with inquiries and clients across the country.</p>
            <p>To add to our vision of merging with 21st-century advancements, we decided to expand our area of expertise to the IT domain. Confident that our satisfied customers will support us through our new venture, the plan was put into action in the year 2022, developing the name “Al Katef IT Solutions”</p>
            <p>In 2023, Al Katef IT Solutions, took a step towards opening a branch in India that began with recruiting a talented and a skilled team who’d bring our value and mission closer to success.</p>
          </div>
        </div>
      </div>
      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  )
}
