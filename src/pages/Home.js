import React, { useState } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo_white.png';
import Websoln from '../images/ser_sec_web.svg';
import Digimrkt from '../images/ser_sec_digi.svg';
import Lease from '../images/ser_sec_lease.svg';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceBox from '../components/ServiceBox';
import ServiceBoxrotate from '../components/ServiceBoxrotate';
import Amcimg from '../images/ser_rot_amc.jpg';
import Salesimg from '../images/ser_rot_sales.jpg';
import Trouble from '../images/ser_rot_trouble.webp';
import Netwrkimg from '../images/ser_rot_network.webp';
import Photocpy from '../images/ser_rot_trouble_photocpy.webp';
import Telecom from '../images/ser_rot_telecom.webp';
import Graphic from '../images/ser_rot_graphic.webp';
import ITspprt from '../images/ser_rot_it.webp';
import Appdev from '../images/ser_rot_appdev.webp';
import LogoSlider from '../components/LogoSlider';
import WhychooseBox from '../components/WhychooseBox';
import BestImg from '../images/why-choose-us-best.svg';
import StaffImg from '../images/why-choose-us-staffs.svg';
import ReliableImg from '../images/why-choose-us-reliable.svg';
import AwardImg from '../images/why-choose-us-award.svg';
import Footer from '../components/Footer';
import FormModal from '../components/FormModal';
import { useEffect } from 'react';


const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    const modalShownBefore = localStorage.getItem('modalShown');

    if (!modalShownBefore) {
      handleShow();

      localStorage.setItem('modalShown', 'true');
    }
  }, []);

  return (
    
    <div className="home-container">
      <FormModal handleClose={handleClose} handleShow={handleShow} show={show}/>
      <section className="banner-section">
        <nav class="navbar navbar-expand-lg navbar-home">
          <div class="nav-item-parent">
            <Link class="navbar-brand" to='/'>
              <img src={Logo} className='main-logo' alt="Logo" />
            </Link>
            <button class="navbar-toggler bg-white navbar-toggler-home" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav navbar-nav-home">
                <li class="nav-item nav-item-home">
                  <Link class="nav-link nav-link-home" aria-current="page" to='/'>Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home" to='/about'>About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home" to='/services'>Services</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home" to='/products'>Products</Link>
                </li>
                {/* <li class="nav-item">
                  <Link class="nav-link nav-link-home" to='/Portfolio'>Portfolio</Link>
                </li> */}
                <li class="nav-item">
                  <Link class="nav-link nav-link-home" to='/blogs'>Blog</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home" to='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='banner-section-para-parent'>
          <div className='banner-section-para'>
            <p>WE SERVE <br />YOU THE <br />BEST SERVICE</p>
            <button className='offer-btn-home'>OFFERS</button>
          </div>
        </div>

      </section>
      <div className='follow-us-section'>
        <div class="soc">
          <h4 class="sm-header">Follow us on</h4>
          <div class="line"></div>
          <ul className="soc-list">
            <li className="soc-item">
              <a href="https://www.facebook.com/people/ITsolutions4uco/100086401916459/" className="soc-link">
                <FontAwesomeIcon icon={faFacebookF} className='facebook-icon' />
              </a>
            </li>
            <li className="soc-item">
              <a href="https://twitter.com/alkatefit" className="soc-link">
                <FontAwesomeIcon icon={faTwitter} className='twitter-icon' />
              </a>
            </li>
            <li className="soc-item">
              <a href="https://www.instagram.com/alkatefitsolutions/" className="soc-link">
                <FontAwesomeIcon icon={faInstagram} className='instagram-icon' />
              </a>
            </li>
            <li className="soc-item">
              <a href="https://www.linkedin.com/company/al-katef-it-solutions/" className="soc-link">
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedin-icon' />
              </a>
            </li>
            <li className="soc-item">
              <a href="https://www.reddit.com/user/Alkatef/" className="soc-link">
                <FontAwesomeIcon icon={faReddit} className='reddit-icon' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className='service-section'>
        <div className='service-title'>
          <h2 id='service-section'><span className='title-blue'>Our</span> <span className='title-orange'>Services</span></h2>
          <p>Custom IT Solutions for Your Successful Business</p>
        </div>
        <div className='service-boxes'>
          <ServiceBox imageSrc={Websoln} serviceTitle="Website Solutions" buttonText="More Details" redirect="/website-solution" />
          <ServiceBox imageSrc={Digimrkt} serviceTitle="Digital Marketing" buttonText="More Details" redirect="/digital-marketing"/>
          <ServiceBox imageSrc={Lease} serviceTitle="Leasing" buttonText="More Details" redirect="/leasing"/>
        </div>
        <div className='service-boxes-rotate'>
          <ServiceBoxrotate imageSrc={Amcimg} boxRottitle='AMC' serviceContent="We provide this service that intends to ease
                        our client’s business operations by providing them an yearly contract including all maintenance
                        services and repairs of their printers/ photocopiers" />

          <ServiceBoxrotate imageSrc={Salesimg} boxRottitle='SALES' serviceContent="We offer a wide range of printers and
                        photocopiers to cater to your business needs. Our high-quality products are designed to deliver
                        exceptional performance and reliability, ensuring that your printing and copying requirements
                        are met with ease." />

          <ServiceBoxrotate imageSrc={Trouble} boxRottitle='TROUBLESHOOT AND REPAIR' serviceContent="We understand that technical issues with
                        printers and photocopiers can be frustrating, which is why our expert technicians are here to
                        help you troubleshoot and resolve any problems you may encounter." />

          <ServiceBoxrotate imageSrc={Netwrkimg} boxRottitle='NETWORK SOLUTIONS' serviceContent="We provide a multitude of products, all of
                        which aims to run your business with ease and highest efficiency. We provide an even wider range
                        of technological equipment to better suit your requirements, in other words, customized products
                        to fit your needs." />

          <ServiceBoxrotate imageSrc={Photocpy} boxRottitle='PHOTOCOPYING' serviceContent="Whether you need a copier for a day or a
                        long-term, our expert team is here to provide you with personalized service and support." />

          <ServiceBoxrotate imageSrc={Telecom} boxRottitle='TELECOM SOLUTIONS' serviceContent="Optimize your work environment with our server solutions. 
                        Improve connectivity, data management, and performance. Simplify workflows and enhance productivity." />

          <ServiceBoxrotate imageSrc={Graphic} boxRottitle='GRAPHIC DESIGN' serviceContent="We provide services to develop graphics
                        incorporating texts and images to visually convey information." />

          <ServiceBoxrotate imageSrc={ITspprt} boxRottitle='IT SUPPORT' serviceContent="We offer a wide range of IT services in order
                        to meet your customized requirements (IT products and services)." />

          <ServiceBoxrotate imageSrc={Appdev} boxRottitle='APP DEVELOPMENT' serviceContent="Software applications to increase efficacy of
                        your business and to interact with your clients on an easier platform." />
        </div>
      </section>

      <section className='company-section'>
        <div className='company-title'>
          <h2 id='service-section'><span className='title-blue'>TRUSTED BY</span> <span className='title-orange'>COMAPNIES LIKE</span></h2>
        </div>
        <div className='service-logo'>
          <LogoSlider />
        </div>
      </section>

      <section className='why-choose-us'>
        <h2 id='service-section'><span className='title-blue'>WHY CHOOSE</span> <span className='title-orange'>US</span></h2>
        <p>We Are Here to HELP You Grow Your Business Exponentially</p>

        <div className='why-choose-boxes'>
          <WhychooseBox whychooseimg={BestImg} whychoosetitle='BEST IN INDUSTRY' whychoosedesc='Equipping ourselves with in-depth knowledge and an intense passion to grow, our skills evolve into ones that exceed the expectations of our clients.' />
          <WhychooseBox whychooseimg={StaffImg} whychoosetitle='PROFESSIONAL STAFF' whychoosedesc='With the best experts and professionals in the industry, we aim to provide the best quality services that will leave you beyond satisfied.' />
          <WhychooseBox whychooseimg={ReliableImg} whychoosetitle='RELIABLE AND TRUSTABLE' whychoosedesc='Experience and passion work wonders with a genuine willingness to provide the best to our clients. We take responsibility for our clients satisfaction.' />
          <WhychooseBox whychooseimg={AwardImg} whychoosetitle='AWARD WINNING' whychoosedesc=' Gold Partner Award from SHARP ( New Smart Office Automation ), Best Seller Mono For The Year Award at the NSOA Channel Meet from SHARP, Best Award from Al Hayat Printing Press LLC' />
        </div>
      </section>


      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  );
};

export default Home;