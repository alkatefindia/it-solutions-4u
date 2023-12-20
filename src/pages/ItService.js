import React from 'react'
import "../styles/ItService.css"
import Whatsapp from '../components/Whatsapp'
import NavigationBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from 'react-bootstrap'
import IT from "../images/it-service.svg"

import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ItService = () => {
    const navigate=useNavigate()

    const handleContact=()=>{
        navigate('/contact')
    }

  return (
    <div>
          <Helmet>
      <title>Unleash Innovation: Top-Tier IT Solutions in Abu Dhabi | Al Katef </title>
      <meta
      name="description"
      content="Elevate your business with powerful IT solutions in Abu Dhabi. From managed services to custom software, we empower your success.  Secure networks, cloud migration, AI & more! 🇦🇪"
    />
        </Helmet>

        <Whatsapp/>
            <NavigationBar/>


            <div className='container mt-4'>
            <h1><span className='title-blue'>Unleash Your Business Potential with Cutting-Edge</span> <span className='title-orange'>IT Services in UAE</span></h1>
            </div>

            <div className='it-service-top'>
                <div className='it-service-img'>
                    <img src={IT} alt="" />
                </div>
                <div className="it-service-content">
                <h3><span className='title-blue'> Empowering businesses across the UAE with innovative technology solutions.</span></h3>
                    <p>Boost Efficiency and Productivity: Streamline operations, automate tasks, and unlock new growth opportunities with our managed IT services.</p>
                    <p>Enhance Security and Compliance: Safeguard your data with robust cybersecurity solutions and ensure compliance with UAE regulations.</p>
                    <p>Optimize your Cloud Strategy: Leverage the power of the cloud to scale your infrastructure, improve flexibility, and reduce costs.</p>
                    <p>Empower your Workforce: Equip your team with the latest tools and technologies to collaborate effectively and drive innovation.</p>
                    <Button onClick={handleContact} variant="primary">Contact Us</Button>
                </div>
            </div>

            <div className='all-service-points d-flex justify-content-center flex-wrap gap-3 mt-5'>
                <div className='services-points i1'> <h4>Cloud Computing</h4> <button className='btn'>view</button></div>
                <div className='services-points i2'><h4>Cybersecurity</h4> <button className='btn'>view</button></div>
                <div className='services-points i3'><h4>Network Infrastructure </h4><button className='btn'>view</button></div>
                <div className='services-points i4'><h4>Software Development </h4><button className='btn'>view</button></div>
                <div className='services-points i5'><h4>Data Management </h4><button className='btn'>view</button></div>
                <div className='services-points i6'><h4>Business Intelligence </h4> <button className='btn'>view</button></div>
                <div className='services-points i7'><h4>IT Consulting </h4><button className='btn'>view</button></div>
            </div>





            <section className='footer-section'>
                <Footer />
            </section>
    </div>
  )
}

export default ItService