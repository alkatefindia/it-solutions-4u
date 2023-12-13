import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo_black.png';
import Footer from '../components/Footer';
import "../styles/Home2.css"
// import "../styles/Home.css"
import questionImg from "../images/questions.svg";
import Websoln from '../images/ser_sec_web.svg';
import Lease from '../images/ser_sec_lease.svg';
import Maintenance from '../images/maintenance.svg';
import q from '../images/q.svg';
import sales from '../images/sales.svg';
import network from '../images/network.svg';
import copying from '../images/copying.svg';
import Telecom from '../images/telecom.svg';
import design from '../images/design.svg';
import IT from '../images/IT.svg';
import App from '../images/App.svg';
import front from "../images/front.png";
import ServicesBox from './ServicesBox';
import LogoSlider from '../components/LogoSlider';
import WhychooseBox from '../components/WhychooseBox';
import BestImg from '../images/why-choose-us-best.svg';
import StaffImg from '../images/why-choose-us-staffs.svg';
import ReliableImg from '../images/why-choose-us-reliable.svg';
import AwardImg from '../images/why-choose-us-award.svg';
import Whatsapp from '../components/Whatsapp';
import { useNavigate } from 'react-router-dom';





const Home2 = () => {
  const navigate = useNavigate();


  const handleContact = () => {
      navigate('/contact');
    };
  const handleServices = () => {
      navigate('/services');
    };
  return (
    <div>
      <Whatsapp/>

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
                {/* <li class="nav-item">
                  <Link class="nav-link nav-link-home" to='/Portfolio'>Portfolio</Link>
                </li> */}
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
                <div className='left-content  '>
                    <span className="title-orange"><h6 className=' bg-light rounded-4 text-center mt-5 mb-3' >Digital Startegy With Digital Peak </h6></span>
                    <span className="title-blue mt-5 "><h1 className='mb-3' >Drive Results With Digital Solutions </h1></span>
                    <div className='right-main-2'>
            <img className='mt-5' src={front} width={"100%"} height={"auto"} alt="digital marketing agency
            in Dubai" />
            </div>
                    <span className=" mt-5"><p className='' >We provide creative and technical solutions for business to engage  with their target audience through digital channels </p></span>
                    <span><button onClick={handleContact} className=' btn btn-primary  rounded-5'>Contact Us</button>&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleServices} className='btn  btn-success  rounded-5'>View Services</button></span>

                </div>
            </div>
            <div className='right-main'>
            <img className='mt-5' src={front} width={"100%"} height={"auto"} alt="digital marketing agency
            in Dubai" />
            </div>
        </div>
        </section>

        

        <section className='service-section'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #FEF5F3" fill-opacity="1" d="M0,32L40,32C80,32,160,32,240,53.3C320,75,400,117,480,133.3C560,149,640,139,720,117.3C800,96,880,64,960,80C1040,96,1120,160,1200,170.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        
        <div className='service-content'>
        <span className='title-blue '><h2 className='fw-bold'>Digital Marketing Services</h2></span>

            <div className='all-services'>
            <ServicesBox img={Websoln} title='Web Solutions' redirect="/website-solution" desc="A visual appealing & user friendly websites can enhance a company's presence increase brand awarenss and drive more traffic" />
            <ServicesBox img={questionImg} title='Digital Marketing' redirect="/digital-marketing" desc="Digital marketing is an essential part of many businesses marketing strategies, as it allows them to reach a larger audience" />
            <ServicesBox img={Lease} title='Leasing'redirect="/leasing" desc="Leasing is our most popular and our most flexible services that involves renting of a product" />
            <ServicesBox img={Maintenance} title='AMC' desc="We provide a yearly contract for printer /photocopier maintenance and repairs to streamline client operations." />
            <ServicesBox img={sales} title='SALES' desc="Discover our diverse printers and copiers for your business needs, ensuring high-quality performance and reliability." />
            <ServicesBox img={q} title='TROUBLESHOOT AND REPAIR' desc="Our expert technicians are ready to help you troubleshoot and resolve any technical issues with printers and photocopiers." />
            <ServicesBox img={network} title='NETWORK SOLUTIONS' desc="We provide a multitude of products, all of which aims to run your business with ease and highest efficiency." />
            <ServicesBox img={copying} title='PHOTOCOPYING' desc="Whether you need a copier for a day or a long-term, our expert team is here to provide you with personalized service and support." />
            <ServicesBox img={Telecom} title='TELECOM SOLUTIONS' desc="Optimize your work environment with our server solutions. Improve connectivity, data management, and performance." />
            <ServicesBox img={design} title='GRAPHIC DESIGN' desc="We provide services to develop graphics incorporating texts and images to visually convey information." />
            <ServicesBox img={IT} title='IT SUPPORT' desc="We offer a wide range of IT services in order to meet your customized requirements (IT products and services)." />
            <ServicesBox img={App} title='APP DEVELOPMENT' desc="Software applications to increase efficacy of your business and to interact with your clients on an easier platform." />
            </div>

            <div className='oval'></div>
            {/* <div className='oval2'></div> */}

        </div>
        </section>
        
        <section className='company-section'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L40,32C80,32,160,32,240,53.3C320,75,400,117,480,133.3C560,149,640,139,720,117.3C800,96,880,64,960,80C1040,96,1120,160,1200,170.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
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
  )
}

export default Home2