import React from 'react'
import NavigationBar from '../components/Navbar'
import Footer from '../components/Footer'
import  "../styles/portfolio.css"
import PortfolioBox from '../components/PortfolioBox'



const Portfolio = () => {
  return (
    <div>
      <NavigationBar />
<div className='container'>
      <div className='portfolio-section  '>
        <h1><span className='title-orange'>Portfolio</span></h1>
        <p> <span className='title-blue'> Our design agency offers innovative solutions that captivate<br/>customers, drive engagement and get results.</span></p>
      </div>
      <hr/>
      </div>
      <PortfolioBox/>
      <section className='footer-section'>
        <Footer />
      </section>        
    </div>
  )
}

export default Portfolio