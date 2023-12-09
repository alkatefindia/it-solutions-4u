import React from 'react'
import NavigationBar from '../components/Navbar'
import Footer from '../components/Footer'
import PortfolioBox from '../components/PortfolioBox'
import website from '../images/website.webp';



const Portfolio = () => {
  return (
    <div>
      <NavigationBar />
      
      <div className='d-flex flex-wrap gap-1 row-gap-4 container justify-content-center'>
      <PortfolioBox imageSrc={website} boxRottitle='Website'/>
      <PortfolioBox imageSrc={website} boxRottitle='Digital Marketing' />
      <PortfolioBox imageSrc={website} boxRottitle='Mobile App' />
      <PortfolioBox imageSrc={website} boxRottitle='SEO' />
      <PortfolioBox imageSrc={website} boxRottitle='SEO' />
      <PortfolioBox imageSrc={website} boxRottitle='SEO' />
      </div>


      <section className='footer-section'>
        <Footer />
      </section>        
    </div>
  )
}

export default Portfolio