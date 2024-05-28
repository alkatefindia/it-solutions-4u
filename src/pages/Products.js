import React from 'react';
import NavigationBar from '../components/Navbar';
import '../styles/Product.css';
import ImgTop from '../images/product-page-top-img.jpg';
import Button from 'react-bootstrap/Button';
import ProductCategory from '../components/ProductCategory';
import Printer from '../images/printer.jpg';
import Consumables from '../images/consumables.png';
import CCTV from '../images/cctv.jpg';
import Biometrics from '../images/Biometrics.jpg';
import Plotter from '../images/plotter.jpg';
import Laptop from '../images/Laptop.jpg';
import Panel from '../images/flat panel.jpg';
import Telecom from '../images/pabx.jpg';
import Footer from '../components/Footer.js';
import Whatsapp from '../components/Whatsapp.js';
import { Helmet } from 'react-helmet';
import Navbar2 from '../components/Navbar2.js';

export default function Products() {
  return (
    <div>
      <Whatsapp premsg="Hi, I'm interested in your products. Can you provide more details about the available products"/>
      <Helmet>
                <title> Top-Rated Printer Providers in Dubai, UAE</title>
                <meta name="description" content="Providing excellent printers to ensure the best possible printing experience each and every time, as well as outstanding output and high-quality printing. Select excellence"/>
            </Helmet>
      {/* <NavigationBar /> */}
      <Navbar2/>

      <div className='product-top-container'>
        <div className='product-top-img-container'>
          <div className='product-top-grey'>
            <img src={ImgTop} alt='Top-Rated Printer Providers in Dubai, UAE' />
          </div>
        </div>
        <div className='product-top-txt'>
          <h1><span className='title-blue'>OUR</span> <span className='title-orange'>PRODUCTS</span></h1>
          <p>The proliferation of advanced devices are revolutionizing the way we approach productivity and streamline workflows.</p>
          <p>The surge in advanced devices is reshaping productivity and workflow approaches. By seamlessly integrating technology, we're fostering collaboration, creativity, and efficiency, propelling customers to the forefront of this transformative revolution.</p>
          <Button variant="primary">Explore Now</Button>
        </div>
      </div>
      <div className='product-category-container'>
        <ProductCategory productName='Printer' productImage={Printer} productLink='/printer'/>
        <ProductCategory productName='Consumables' productImage={Consumables} productLink='/consumables'/>
        <ProductCategory productName='CCTV' productImage={CCTV} productLink='/products'/>
        <ProductCategory productName='Biometrics' productImage={Biometrics} productLink='/products'/>
        <ProductCategory productName='Plotter' productImage={Plotter} productLink='/products'/>
        <ProductCategory productName='Laptop' productImage={Laptop} productLink='/products'/>
        <ProductCategory productName='Digital Panel' productImage={Panel} productLink='/products'/>
        <ProductCategory productName='Telecom' productImage={Telecom} productLink='/products'/>
      </div>

      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  )
}
