import React from 'react';
import NavigationBar from '../components/Navbar';
import '../styles/Blog.css';
import Blog1 from '../images/blog_1.jpg'
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import { Helmet } from 'react-helmet';


export default function Blogs() {
  return (
    <div>
      <Whatsapp/>
      <Helmet>
                <title>Trends and Tips: Abu Dhabi's Digital Marketing Scene</title>
                <meta name="description" content= "Explore the latest and hottest topics with our top trending blogs, offering insightful content and staying ahead of the curve in diverse subjects.' / 'Explore the latest trends, insights, and diverse topics with the top trending blogs. Stay informed and entertained with cutting-edge content."/>
            </Helmet>
      <NavigationBar />
      <div className='blog-page-conatiner'>
        <div className='blog-page-top'>
          <h1><span className='text-white'>Our Blogs</span></h1>
          <p className='text-white'>Our blog is a comprehensive resource that offers valuable insights and expert advice on various aspects of digital marketing and website services. It is designed to keep you informed about the latest trends, strategies, and industry best practices, enabling you to enhance your online visibility and drive business expansion.</p>
          <div className='newsletter'><input type="email" placeholder='Your Email' /> <button className='newsletter-btn btn'>Join newsletter</button></div>
        </div>
        <div className='blog-content-section'>
        <div className='blog-page-blog_section' onClick={() => window.location.href = '/maximizing-your-social-media-presence-tips-from-a-top-uae-agency'}>
          <img src={Blog1} alt='err' />
          <h5>Maximizing Your Social Media Presence Tips from a Top UAE Agency</h5>
          <p>Social media has become an integral part of our daily lives, and it's no secret...</p>
        </div>
        <div className='blog-page-blog_section' onClick={() => window.location.href = '/maximizing-your-social-media-presence-tips-from-a-top-uae-agency'}>
          <img src={Blog1} alt='err' />
          <h5>Maximizing Your Social Media Presence Tips from a Top UAE Agency</h5>
          <p>Social media has become an integral part of our daily lives, and it's no secret...</p>
        </div>
    
        </div>

      </div>
      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  )
}
