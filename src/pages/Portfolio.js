import React from 'react'
import NavigationBar from '../components/Navbar'
import Footer from '../components/Footer'
import  "../styles/portfolio.css"
import PortfolioBox from '../components/PortfolioBox'
import { useNavigate } from 'react-router-dom'
import dynnite from "../images/dynnite ss.png"
import alghad from "../images/algahd.png"
import forU from "../images/itsolutions.png"
import Navbar2 from '../components/Navbar2'



const Portfolio = () => {
  const navigate= useNavigate();
  const handlecta = () => {
    navigate("/contact")
  }

  return (
    <div>
      {/* <NavigationBar /> */}
      <Navbar2/>

<div className='container mb-5'>
        <h1 className='text-center mt-5 '><span className='title-orange '>Portfolio</span></h1>
        <p className='text-center '>This space serves as a window into our world of creativity, innovation, and dedication to delivering outstanding results.</p>
  
      </div>
    <div className='portfolio-content'>

      <PortfolioBox boxRottitle={"dynnite.com"}  redirect={"https://dynnite.com/"} boxbtn1={"UI Design"} boxbtn2={"UX Design"} imageSrc={dynnite}/>
      <PortfolioBox boxRottitle={"alghadalmushirqinstitute.com"} redirect={"https://www.alghadalmushirqinstitute.com/"} boxbtn1={"UI Design"} boxbtn2={"UX Design"} imageSrc={alghad}/>
      <PortfolioBox boxRottitle={"itsolutions4u.co"} redirect={"https://itsolutions4u.co/"} boxbtn1={"UI Design"} boxbtn2={"UX Design"} imageSrc={forU}/>
      <PortfolioBox boxRottitle={"Dashboard Design for Saas"}boxbtn1={"UI Design"} boxbtn2={"UX Design"} imageSrc="https://assets-global.website-files.com/647fd21aadbb45dd6f29954e/65524066c141317357b68209_yourfolio-portfolio%20(3)-p-1080.jpg"/>
      <PortfolioBox boxRottitle={"Dashboard Design for Saas"}boxbtn1={"UI Design"} boxbtn2={"UX Design"} imageSrc="https://assets-global.website-files.com/647fd21aadbb45dd6f29954e/6552402c2a66b7b9146ff685_yourfolio-portfolio%20(1)-p-1080.jpg"/>
      <PortfolioBox boxRottitle={"Dashboard Design for Saas"}boxbtn1={"UI Design"} boxbtn2={"UX Design"} imageSrc="https://assets-global.website-files.com/647fd21aadbb45dd6f29954e/6552402c2a66b7b9146ff685_yourfolio-portfolio%20(1)-p-1080.jpg"/>

  </div>

  <div className=' d-flex justify-content-center align-items-center'>
      <div className='cta-wrapper'>
        <div className='cta-content'>
        <h2>Need help with<br/> template customization?</h2>
        <p className='w-75'>Meet our Template Subscription. Get unlimited design help for a monthly price.</p>
        <button className='btn btn-outline-light' onClick={handlecta}>Get in touch</button>
        </div>


      </div>
  </div>

      <section className='footer-section'>
        <Footer />
      </section>        
    </div>
  )
}

export default Portfolio