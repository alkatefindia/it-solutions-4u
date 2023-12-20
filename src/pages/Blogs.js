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
          <h1><span className='title-blue'>Our</span> <span className='title-orange'>Blogs</span></h1>
          <p>Our blog is a comprehensive resource that offers valuable insights and expert advice on various aspects of digital marketing and website services. It is designed to keep you informed about the latest trends, strategies, and industry best practices, enabling you to enhance your online visibility and drive business expansion. With a focus on topics such as search engine optimization (SEO), social media advertising, web development, and content marketing, our blog provides in-depth articles that cover everything from basic concepts to advanced techniques. Whether you're a business owner, marketer, or simply interested in online marketing, our blog offers something for everyone. By exploring our blog, you'll gain a wealth of knowledge that will empower you to make informed decisions and implement effective strategies. Whether you're looking to improve your website's search engine rankings, create compelling content, run successful social media ad campaigns, or optimize your website's performance, our blog articles provide actionable insights and step-by-step guidance. We invite you to start exploring our blog today and take advantage of the wealth of information and expert advice it offers. Stay up to date with the latest trends and best practices in digital marketing and website services, and take your online presence to new heights.</p>
        </div>
        <div className='blog-page-blog_section' onClick={() => window.location.href = '/maximizing-your-social-media-presence-tips-from-a-top-uae-agency'}>
          <img src={Blog1} alt='err' />
          <h5>Maximizing Your Social Media Presence Tips from a Top UAE Agency</h5>
          <p>Social media has become an integral part of our daily lives, and it's no secret...</p>
        </div>

      </div>
      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  )
}
