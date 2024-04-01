import React from 'react';
import '../styles/Digi_mrkt.css';
import NavigationBar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import DigiImg from '../images/digital_mrkt_page.png';
import Digimrkt1 from '../images/BFS_Basic.svg';
import Digimrkt2 from '../images/SEO_icon.svg';
import Digimrkt3 from '../images/PPC_icon.svg';
import Digimrkt4 from '../images/social_icon.svg';
import Digimrkt5 from '../images/Email_icon.svg';
import Digimrkt6 from '../images/Content_icon.svg';
import DigiBox from '../components/DigimrktBox';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import { Helmet } from 'react-helmet';

function Digi_mrkt() {

    const handlebtn=()=>{
        window.location.href="/contact"
    }

    return (
        <div>
            <Whatsapp premsg="Hi there! 👋 I'm interested in learning more about your digital marketing services"/>
            <NavigationBar />
            <Helmet>
                <title>Maximize ROI: Effective Digital Marketing Strategies" / "Maximize ROI: Elevate Your Digital Marketing Impact</title>
                <meta name="description" content=  "Explore key facets of digital marketing: SEO, SEM, social media, content marketing, email marketing, and analytics for online success."/>
                <link rel='canonical' href={window.location.href} ></link>
            </Helmet>
            
            <div className='web-soln-top'>
                <div className='web-soln-top-img-container'>
                    <img src={DigiImg} alt='err' />
                </div>
                <div className='web-soln-top-txt-container'>
                    <h1><span className='title-blue'>DIGITAL</span> <span className='title-orange'>MARKETING</span></h1>
                    <p>Custom IT Solutions for Your Successful Business</p>
                    <p>A progressing tool of marketing that includes advertising through effective use of the Internet and digital platforms</p>
                    <p>Social media marketing</p>
                    <p>Pay per click advertising (PPC)</p>
                    <p>Search engine optimization (SEO)</p>
                    <Button onClick={handlebtn} variant="primary">Contact Us</Button>
                </div>
            </div>
            <div className='digi-mrkt-bottom'>
                <div className='digi-mrkt-bottom-card-container'>
                    <DigiBox digiimg={Digimrkt1}  digititle='Digital Marketing' alttxt='Digital Marketing' dididesc='Digital marketing is an essential part of many businesses marketing strategies, as it allows them to reach a larger audience, engage with potential customers in a more personalized way, and track the effectiveness of their marketing efforts' />
                    <DigiBox digiimg={Digimrkt2} link={'/digital-marketing/search-engine'}  digititle='Search Engine Optimization (SEO)' alttxt='Search Engine Optimization (SEO)' dididesc='Search Engine Optimization, is the process of optimizing your website to increase its visibility and ranking in search engine results pages (SERPs). The ultimate goal of SEO is to attract more organic traffic to your website from search engines like Google, Bing, and Yahoo.' />
                    <DigiBox digiimg={Digimrkt3} link={'/digital-marketing/Ppc'} digititle='Pay-Per-Click (PPC) Advertising' alttxt='Pay-Per-Click (PPC) Advertising' dididesc='Pay-Per-Click advertising, is a type of online advertising model in which advertisers pay each time a user clicks on one of their ads. PPC advertising allows you to place ads for your website in prominent positions on search engine results pages (SERPs) and other relevant websites, and you only pay when someone clicks on your ad' />
                    <DigiBox digiimg={Digimrkt4} link={'/digital-marketing/social-media'} digititle='Social Media Marketing'alttxt='Social Media Marketing' dididesc='Social Media Marketing (SMM) is the process of using social media platforms to promote your website or brand. This can include creating and sharing content, engaging with followers and influencers, and running paid advertising campaigns on social media platforms like Facebook, Instagram, Twitter, and LinkedIn' />
                    <DigiBox digiimg={Digimrkt5} digititle='Email Marketing' alttxt='Email Marketing' dididesc='Email Marketing is the practice of using email to promote your website, products, and services to your audience. This can include sending promotional messages, newsletters, special offers, and other types of content to subscribers who have opted-in to receive communications from you' />
                    <DigiBox digiimg={Digimrkt6} link={'/digital-marketing/content-marketing'} digititle='Content Marketing' alttxt='Content Marketing' dididesc='Content Marketing is the practice of creating and sharing valuable, relevant, and consistent content to attract and retain a clearly defined audience, with the ultimate goal of driving profitable customer action. Content marketing can include various types of content such as blog posts, videos, infographics, social media posts, and more' />
                </div>
            </div>

            <section className='footer-section'>
                <Footer />
            </section>
        </div>
    )
}
export default Digi_mrkt