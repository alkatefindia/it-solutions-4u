import React, { useRef, useState } from 'react';
import NavigationBar from '../components/Navbar';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import Whatsapp from '../components/Whatsapp';
import { Helmet } from 'react-helmet';
import ThanksNote from '../components/ThanksNote';

export default function Contact() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2swzphn', 'template_g8h71ep', form.current, '0f9IduTSqGe0ndFxP')
    setShowModal(true)
    form.current.reset();
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Helmet>
      <title>Web Design Company In Abu Dhabi. Top Rated for Website Design & Development In The UAE</title>
      <meta
      name="description"
      content="A leading Web Design Company in Abu Dhabi, we are also a Digital Marketing Agency that provides Social Media Services and Management, SEO  and Mobile App Development"
    />
      <link rel='canonical' href={window.location.href} ></link>

        </Helmet>
      <Whatsapp/>
      <NavigationBar />
      <div className='contact-contents'>
      <h2 className='text-center mt-5 mb-5'>Get in touch with us 👋</h2>

<div className='full-icon'>
  <div className='icon-body'>
      <div class="icon"><i class="fa-solid fa-location-dot fa-2x" aria-hidden="true"></i></div>
      <h6>Abudhabi, UAE</h6>
      </div>
      <div className='icon-body'>
      <div class="icon"><i class="fa-solid fa-envelope-open-text fa-2x" aria-hidden="true"></i></div>
      <h6>sales@itsolutions4u.co</h6>
      </div>      
      <div className='icon-body'>
      <div class="icon"><i class="fa-solid fa-phone fa-2x" aria-hidden="true"></i></div>
      <h6>+971556449916</h6>
      </div>      
      </div>

      <ThanksNote handleClose={handleCloseModal} show={showModal}/>

        <Container>
          <div className='form-map '>
          <Form className='contact-form' ref={form} onSubmit={sendEmail}>
            <Row>
              
                <Form.Group controlId='name'>
                  {/* <Form.Label>Name</Form.Label> */}
                  <Form.Control type='text' placeholder='Your Name' name="name" required />
                </Form.Group>
              
              
                <Form.Group controlId='email'>
                  {/* <Form.Label>Email Address</Form.Label> */}
                  <Form.Control type='email' placeholder='Your Email' name="email" required />
                </Form.Group>
              
            </Row>
            <Row>
            
            <Form.Group controlId='company'>
                  {/* <Form.Label>Company Name</Form.Label> */}
                  <Form.Control type='text' placeholder='Your Company Name' name="company" required />
                </Form.Group>
                

            
            <Form.Group controlId='phone'>
              {/* <Form.Label>Contact Number</Form.Label> */}
              <Form.Control type='text' placeholder='Your Contact Number'  pattern='^\+(?:[0-9] ?){6,14}[0-9]$' title='Please enter your country code' name="mobile" required />
            </Form.Group>
            

            </Row>
            <Form.Group controlId='message'>
              {/* <Form.Label>Message</Form.Label> */}
              <Form.Control as='textarea' rows={6} placeholder='Your Message'name="message" required  />
            </Form.Group>
            <Button variant='dark' type='submit' value="Send" className='send-button'>
              Send Message
            </Button>
          </Form>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.626104750271!2d54.5217293!3d24.3595137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e38a6fafa28c9%3A0x614cc0e3d724ea9a!2sAl%20Katef%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1704532584749!5m2!1sen!2sin"allowfullscreen="" title='map' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>

        </Container>
      </div>

      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  );
}