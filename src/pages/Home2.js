import React, {  useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Logo from '../images/logo_black.png';
import Footer from '../components/Footer';
import "../styles/Home2.css"
import questionImg from "../images/questions.svg";
import Websoln from '../images/ser_sec_web.svg';
import Maintenance from '../images/maintenance.svg';
import q from '../images/q.svg';
import sales from '../images/sales.svg';
import network from '../images/network.svg';
import copying from '../images/copying.svg';
import Telecom from '../images/telecom.svg';
import IT from '../images/IT.svg';
import front from "../images/front.png";
import ServicesBox from '../components/ServicesBox';
import LogoSlider from '../components/LogoSlider';
import WhychooseBox from '../components/WhychooseBox';
import BestImg from '../images/why-choose-us-best.svg';
import StaffImg from '../images/why-choose-us-staffs.svg';
import ReliableImg from '../images/why-choose-us-reliable.svg';
import AwardImg from '../images/why-choose-us-award.svg';
import Whatsapp from '../components/Whatsapp';
import { useNavigate } from 'react-router-dom';
import FormModal from '../components/FormModal';



const Home2 = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  



  const navigate = useNavigate();


  const handleContact = () => {
      navigate('/contact');
    };
  const handleServices = () => {
      navigate('/services');
    };

  return (
    <div>
            <FormModal handleClose={handleClose} handleShow={handleShow} show={show}/>

      <Whatsapp premsg='Hello, What service are you providing!'/>
      <Helmet>
      <title>UAE's Trusted IT Partner: Comprehensive Solutions for Every Business | Al Katef</title>
      <meta
      name="description"
      content="Elevate your business with Al Katef IT Solutions, the leading IT solutions provider in UAE. We offer customized IT solutions like Telecom Solutions, AMC, Digital Marketing, Rental Service etc. to empower your digital journey. Contact us today for a free consultation!"
    />
        </Helmet>

        <nav class="navbar navbar-expand-lg navbar-home">
          <div class="nav-item-parent">
            <Link class="navbar-brand" to='/'>
              <img src={Logo} className='main-logo' alt="Logo" />

            </Link>
            <button class="navbar-toggler bg-white navbar-toggler-home" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-5 " id="navbarNav">
              <ul class="navbar-nav navbar-nav-home ">
                <li class="nav-item nav-item-home ">
                  <Link class="nav-link nav-link-home text-black" aria-current="page" to='/'>Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home text-black" to='/about'>About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home text-black" to='/services'>Services</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home text-black" to='/products'>Products</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-link-home text-black" to='/blogs'>Blog</Link>
                </li>
                <li class="nav-item  ">
                  <Link class="nav-link nav-contact-li nav-link-home text-black pe-5" to='/contact'>Contact Us</Link>
                </li>

                <button className='btn btn-outline nav-contact rounded-5'>
                  <Link class="nav-link nav-link-home" to='/contact'>Contact Us</Link>
                </button>
              </ul>
            </div>
          </div>
        </nav>

        <section className='container home-section'>
        <div className='main-home '>
          
            <div className='left-main'>
            <div className='left-services '>
                    <span className="title-orange"><h6 className=' bg-light rounded-4 text-center mt-2 mb-3 p-3' >It Solutions</h6></span>
                    <span className="title-orange"><h6 className=' bg-light rounded-4 text-center mt-2 mb-3 p-3' > Printer Service</h6></span>
                    <span className="title-orange"><h6 className=' bg-light rounded-4 text-center mt-2 mb-3 p-3' >Digital Marketing </h6></span>
                    </div>
                <div className='left-content  '>
                 
                    <span className="title-blue mt-5 "><h1 className='mb-3' >We Build UAE's Future with <span className='title-orange'> IT Solutions.</span> </h1></span>
                    <div className='right-main-2'>
                    <img className='mt-5' src={front} width={"100%"} height={"auto"} alt="digital marketing agency in Dubai" />
                   </div>
                    <span className=" mt-5"><p className='mt-3' >Elevate your expectations with our <br className='br-none'/>commitment to  delivering the finest service. </p></span>
                    <span><button onClick={handleContact} className=' btn btn-primary  rounded-5'>Contact Us</button>&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleServices} className='btn  btn-success  rounded-5'>View Services</button></span>

                </div>
            </div>
            <div className='right-main'>
            <img className='mt-5' src={front} width={"100%"} height={"auto"} alt="digital marketing agency in Dubai" />
            {/* //  <FrontSlider/> */}
             </div>

        </div>

        {/* <div className='d-flex flex-column justify-content-center align-items-center'>
        <span className="title-blue mt-5 fs-1 text-center "><h1 className='mb-3' >WE SERVE YOU  THE BEST SERVICE </h1></span>
        <span className="title-orange"><h6 className=' bg-light rounded-4 text-center mt-3 mb-3 p-2'style={{width:'340px'}} >Digital Startegy With Digital Peak </h6></span>
        </div>


        <div className='d-flex justify-content-center align-items-center gap-3 w-100'> */}
        {/* <img className='mt-5' src={front1} width={"30%"} height={"auto"} alt="digital marketing agency in Dubai" />
              <img className='mt-5' src={front} width={"55%"} height={"auto"} alt="digital marketing agency in Dubai" />
        <img className='mt-5' src={front1} width={"30%"} height={"auto"} alt="digital marketing agency in Dubai" /> */}
        {/* </div> */}
        {/* <FrontSlider/> */}

              {/* <div className='d-flex justify-content-center align-items-center flex-column'>
                  <span className=" mt-5"><p className='mt-3 p-3' >Elevate your expectations with our commitment to  delivering the finest service. </p></span>
                    <span><button onClick={handleContact} className=' btn btn-primary  rounded-5'>Contact Us</button>&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleServices} className='btn  btn-success  rounded-5'>View Services</button></span>
              </div> */}


        </section>

        <section className='service-section'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #FEF5F3" fill-opacity="1" d="M0,32L40,32C80,32,160,32,240,53.3C320,75,400,117,480,133.3C560,149,640,139,720,117.3C800,96,880,64,960,80C1040,96,1120,160,1200,170.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        
        <div className='service-content'>
        <span className='title-blue '><h2 className='fw-bold'>Our Services</h2></span>

            <div className='all-services'>
            <ServicesBox img={IT} title='IT Service' alttxt='IT Service' redirect="/it-service" desc="We offer a wide range of IT services in order to meet your customized requirements (IT products and services)." />
            <ServicesBox img={q} title='Rental Service' alttxt='Rental Service' redirect="/rental-service" desc="Streamline your life with our effortless rental service, providing access to premium products without the long-term commitment" />
            <ServicesBox img={questionImg} title='Digital Marketing' alttxt='Digital Marketing' redirect="/digital-marketing" desc="Digital marketing is an essential part of many businesses marketing strategies, as it allows them to reach a larger audience" />
            {/* <ServicesBox img={Lease} title='Leasing' alttxt='Leasing'  desc="Leasing is our most popular and our most flexible services that involves renting of a product" /> */}
            <ServicesBox img={Telecom} title='Telecom Solutions'  desc="Optimize your work environment with our server solutions. Improve connectivity, data management, and performance." />
            <ServicesBox img={Maintenance} title='AMC' alttxt='AMC'  redirect="/amc" desc="We provide a yearly contract for printer /photocopier maintenance and repairs to streamline client operations." />
            <ServicesBox img={sales} title='SALES' alttxt='SALES' desc="Discover our diverse printers and copiers for your business needs, ensuring high-quality performance and reliability." />
            <ServicesBox img={network} title='NETWORK SOLUTIONS' alttxt='NETWORK SOLUTIONS' desc="We provide a multitude of products, all of which aims to run your business with ease and highest efficiency." />
            <ServicesBox img={copying} title='PHOTOCOPYING' alttxt='PHOTOCOPYING' desc="Whether you need a copier for a day or a long-term, our expert team is here to provide you with personalized service and support." />
            <ServicesBox img={Websoln} title='CCTV' redirect="/cctv" desc="Enhance security with our state-of-the-art CCTV solutions, providing vigilant surveillance for peace of mind in every corner." />
            {/* <ServicesBox img={design} title='GRAPHIC DESIGN' desc="We provide services to develop graphics incorporating texts and images to visually convey information." />
            <ServicesBox img={App} title='APP DEVELOPMENT' desc="Software applications to increase efficacy of your business and to interact with your clients on an easier platform." /> */}
            </div>
            {/* <div className='oval'></div> */}
            {/* <div className='oval2'></div> */}

        </div>
        </section>
        
        <section className='company-section'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L40,32C80,32,160,32,240,53.3C320,75,400,117,480,133.3C560,149,640,139,720,117.3C800,96,880,64,960,80C1040,96,1120,160,1200,170.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <div className='company-title'>
          <h2 id='service-section'><span className='title-blue'>TRUSTED BY</span> <span className='title-orange'>COMPANIES LIKE</span></h2>
        </div>
        <div className='service-logo'>
          <LogoSlider />
        </div>
      </section>

        <section className='why-choose-us'>
        <h2 id='service-section'><span className='title-blue'>WHY CHOOSE</span> <span className='title-orange'>US</span></h2>
        <p>We Are Here to HELP You Grow Your Business Exponentially</p>

        <div className='why-choose-boxes'>
          <WhychooseBox whychooseimg={BestImg} whychoosetitle='BEST IN INDUSTRY' alttxt='BEST IN INDUSTRY' whychoosedesc='Equipping ourselves with in-depth knowledge and an intense passion to grow, our skills evolve into ones that exceed the expectations of our clients.' />
          <WhychooseBox whychooseimg={StaffImg} whychoosetitle='PROFESSIONAL STAFF' alttxt='PROFESSIONAL STAFF' whychoosedesc='With the best experts and professionals in the industry, we aim to provide the best quality services that will leave you beyond satisfied.' />
          <WhychooseBox whychooseimg={ReliableImg} whychoosetitle='RELIABLE AND TRUSTABLE' alttxt='RELIABLE AND TRUSTABLE' whychoosedesc='Experience and passion work wonders with a genuine willingness to provide the best to our clients. We take responsibility for our clients satisfaction.' />
          <WhychooseBox whychooseimg={AwardImg} whychoosetitle='AWARD WINNING' alttxt='AWARD WINNING' whychoosedesc=' Gold Partner Award from SHARP ( New Smart Office Automation ), Best Seller Mono For The Year Award at the NSOA Channel Meet from SHARP, Best Award from Al Hayat Printing Press LLC' />
        </div>
      </section>

        <section className='footer-section'>
        <Footer />
      </section>
    </div>
  )
}

export default Home2