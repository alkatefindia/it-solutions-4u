import React from 'react'
import "../styles/ItService.css"
import Whatsapp from '../components/Whatsapp'
import NavigationBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from 'react-bootstrap'
import IT from "../images/it-service.svg"

import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ItServiceBox from './ItServiceBox'

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
            <ItServiceBox cname="i1"  title='Cloud Computing' btn='View' redirect={'/cloud-computing'}/>
            <ItServiceBox cname="i2" title='Cybersecurity' btn='View'/>
            <ItServiceBox cname="i3" title='Network Infrastructure' redirect={'/network-infrastructure'} btn='View'/>
            <ItServiceBox cname="i4" title='Software Development' btn='View'/>
            <ItServiceBox cname="i5" title='Data Management' btn='View'/>
            <ItServiceBox cname="i6" title='Business Intelligence ' btn='View'/>
            <ItServiceBox cname="i7"title='IT Consulting' redirect={'/it-consulting'} btn='View'/>
      
            </div>
      






            <section className='footer-section'>
                <Footer />
            </section>
    </div>
  )
}

export default ItService