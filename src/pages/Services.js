import React from 'react'
import NavigationBar from '../components/Navbar';
import '../styles/Services.css';
import ServiceLeft from '../components/ServicepageBoxleft';
import ServiceRight from '../components/ServicepageBoxright';
import Digimrktservice from '../images/digital_marketing_service_page.jpg';
import Netwrkservice from '../images/networking_service_page.jpg';
import Photoservice from '../images/Photocopying_service_page.jpg';
import Webservice from '../images/website_service_page.jpg';
import Appservice from '../images/app_development_service_page.jpg';
import Leaseservice from '../images/Leasing_service_page.jpg';
import Salesservice from '../images/sales_service_page.jpg';
import Troubleservice from '../images/troubleshooting_service_page.jpg';
import Telecomservice from '../images/Telecom_service_page.jpg';
import Graphicservice from '../images/designing_service_page.jpg';
import ITservice from '../images/IT_support_service_page.jpg';
import Amcservice from '../images/AMC_service_page.jpg';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import { Helmet } from 'react-helmet';
import ToolsLogoSlider from '../components/ToolsLogoSlider';

export default function Services() {
    return (
        <div className='service-page-container'>
             <Whatsapp premsg="Hi, I'm interested in learning more about your services"/>
             <Helmet>
                <title>best digital services in Dubai</title>
                <meta name="description" content= "Delivering expert digital marketing services to boost online presence, drive engagement, and optimise results for businesses seeking growth and success."/>
            </Helmet>
            <NavigationBar />
            <div className='service-page-title'>
                <h1 id='service-section'><span className='title-blue'>Our</span> <span className='title-orange'>Services</span></h1>
                <p>Custom IT Solutions for Your Successful Business</p>
            </div>
            {/* /////////////////////////////////////////////////////////// */}


                <div className="form-services">

                    <div className="form-card">
                        <h2 className=' fw-bolder text-white mb-5'>Request a free <br/>consultaion</h2>
                        <input type="text" placeholder='Email'/>
                        <input type="tel" placeholder='Number'/>
                        <button className='btn'>Submit</button>
                    </div>

                    <div className="services-link">
                        <div className='service-link-points border-bottom mb-5'>
                          <h3>Digital Marketing</h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                           <h3> Sales</h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                          <h3> Troubleshooting and Repair </h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                          <h3>Networking Solutions</h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                           <h3> Telecom Solutions</h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                          <h3> Photocopying</h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                          <h3>Graphic Designing</h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                           <h3> Website Development</h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                          <h3>IT Support </h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                          <h3>App Development</h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom mb-5'>
                           <h3> AMC</h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className='service-link-points border-bottom '>
                          <h3> Rental Service </h3>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="form-card2">
                        <h2 className=' fw-bolder text-white mb-5'>Request a free <br/>consultaion</h2>
                        <input type="text" placeholder='Email'/>
                        <input type="tel" placeholder='Number'/>
                        <button className='btn'>Submit</button>
                    </div>

                </div>




            {/* /////////////////////////////////////////////////////////// */}

            <ToolsLogoSlider/>

            {/* /////////////////////////////////////////////////////////// */}



            <div className='service-page-contents'>

                <ServiceRight ServiceImg={Digimrktservice} ServiceTitle='DIGITAL MARKETING' alttxt='DIGITAL MARKETING' ServiceDesc='A website is simply a platform to showcase the potential of your business. Without it being given an opportunity to play with variables that are directly in contact with the outside market conditions, it’s beyond difficult to survive in the market with numerous competitors emerging rapidly.

                    Digital marketing could be through various forms, SEO, SMM, and advertising are just to name a few. Through these means, your business would have the capacity to compete against the existing top-notch businesses.' />

                <ServiceLeft ServiceImg={Salesservice} ServiceTitle='SALES' alttxt='SALES' ServiceDesc='Our area of sales covers an extensive range of products, from all types of printers (including tabletop printers, multifunctional photocopiers, and plotters), as well as IT related products such as CCTV, Network essentials, PBAX, Interactive Flat Panels.
                    To know more about the products we provide, please visit our Products Page.' />

                <ServiceRight ServiceImg={Troubleservice} ServiceTitle='TROUBLESHOOTING AND REPAIRS' alttxt='TROUBLESHOOTING AND REPAIRS' ServiceDesc='Our excellently trained IT team is skilled in troubleshooting and repair for a wide variety of technical issues that include networking, CCTV, and more.

                    Whether you need help with configuring your devices or you’re experiencing connectivity issues, or need assistance with diagnosing and fixing a hardware issue, we’ve got your back!

                    This includes repairs of PBAX, network, CCTV, photocopier machines, etc.' />

                <ServiceLeft ServiceImg={Netwrkservice} ServiceTitle='NETWORKING SOLUTIONS' alttxt='NETWORKING SOLUTIONS' ServiceDesc='We’re dedicated to providing top-notch networking solutions to all businesses. We offer a comprehensive list of networking products including _routers, switches, wireless access points, network security_ and more. Our network related products 
                    are designed to deliver fast, reliable, and efficient internet connectivity for your business. Our services extends to providing VPN security, VLANS, QoS, PoE, intrusion detection system, cloud management, etc.' />

                <ServiceRight ServiceImg={Telecomservice} ServiceTitle='TELECOM SOLUTIONS' alttxt='TELECOM SOLUTIONS' ServiceDesc='At Al-Katef IT solutions, we understand the importance of fast, reliable, and high-quality commutation and that’s why we emphasize on providing quality services to our clients that include Phone Systems (PBAX), Unified communication, Control Center Solutions, and other network services. Our expert IT team is dedicated on staying updated on the latest trends, technologies and the most advanced products in the industry' />

                <ServiceLeft ServiceImg={Photoservice} ServiceTitle='PHOTOCOPYING' alttxt='PHOTOCOPYING' ServiceDesc='Our Abu Dhabi branch has an established 20+ years old shop exclusively for photocopying. We provide anything from normal printing of black and white, 
                    to t-shirt prints, and business card design and production.' />

                <ServiceRight ServiceImg={Graphicservice} ServiceTitle='GRAPHIC DESIGNING'alttxt='GRAPHIC DESIGNING' ServiceDesc='Our goal is striving towards creating the best possible creative designs that entails visuals that are attractive and ensure customer traction. We have a separate team of graphic designers to make sure that your wants and needs are custom designed with utmost intricacy. We develop and design various range of products including Posters, flyers, Branding and Identity, Packaging designs, Print designs, Shirts, Hoodies etc.' />

                <ServiceLeft ServiceImg={Webservice} ServiceTitle='WEBSITE DEVELOPMENT' alttxt='WEBSITE DEVELOPMENT' ServiceDesc='Necessity of a website has gained popularity and importance over the past few years. Our expert and talented team is specialized in creating websites accustomed to your needs. Developing a website, however, is no joke. It’s quite a process depending on the kind of website, and the impact you intend to bring with the website.
                     We do website development on platforms such as Wordpress as well as ones that involve coding using various programming languages. Websites may be created depending on the end viewers. It could be information based, for a business, or an e-commerce.
                     Charges, designs, and content apply differently to different types of websites. Our clients usually opt for the package that includes both web development and digital marketing, since a website cannot deliver it’s purpose if not marketed or if you do not work on its reach.' />

                <ServiceRight ServiceImg={ITservice} ServiceTitle='IT SUPPORT' alttxt='IT SUPPORT' ServiceDesc='We engage in providing a diverse array of services to ensure your business is able to maintain its computer systems, network infrastructure, and software applications. Some examples of the kinds of support we provide include:  Technical support: we provide various kinds of technical assistance to the employees who generate productivity in your business. This includes network connectivity, troubleshooting, maintaining hardware systems and software applications etc., Data safety: Back up and other configuration is an essential especially for larger corporate companies to ensure that their data is safe and well-secured, Back-up and recovery: in case of lost or missing data, we always have solutions to recover the data. This erases many of the business-owners worries of their data being lost or stolen, Software and Hardware Procurement: our services also includes providing you assistance while selecting and purchasing applications or computers so that you only spend on trusted, reliable precuts that provides you with the greatest efficiency, Virus Protection for Mail Security, Network Troubleshooting services, Anti-virus Installation for Total Protection' />

                <ServiceLeft ServiceImg={Appservice} ServiceTitle='APP DEVELOPMENT' alttxt='APP DEVELOPMENT' ServiceDesc='We are experienced in building user-friendly and innovative mobile applications that helps your business reach it’s maximum potential. Our skilled team of developers are engaged in the latest trends and are keen 
                     on staying up-to-date on the most advanced technology. We build applications compatible with all kinds of mobiles like iOS, android, etc. App designing and testing are part of our services to please feel free to reach out in case of any issue that might arise that may cause your dissatisfaction as our goal is to maximize client satisfaction by providing them with the best deals available in the market..' />

                <ServiceRight ServiceImg={Amcservice} ServiceTitle='AMC' alttxt='AMC' ServiceDesc='We provide Annual Maintenance Contract to various services that covers the following: Removal of Unnecessary data, Memory Upgrade,  HDD to SSD Upgrade, Clean Junk files, Antivirus Installation, Virus and Spyware Removal,  Software installation and updates, Troubleshooting, Email Configuration, Data and Files Backup and recovery, Computer Maintenance, Driver Updates, Hardware faults and Software debugging diagnosed and fixed. 14. Windows recovery and reload. We also provide leasing for PCs, Flat Panels, Computers, tablets, iPads, plotters, etc. Please contact us for further details.' />

                <ServiceLeft ServiceImg={Leaseservice} ServiceTitle='LEASING' alttxt='LEASING'  ServiceDesc='Leasing is our most popular and our most flexible services that involves renting of a product, mainly printers. To read more, we request you to visit our website. (Digitalcopier.ae)' />

            </div>
            <section className='footer-section'>
                <Footer />
            </section>
        </div>
    )
}
