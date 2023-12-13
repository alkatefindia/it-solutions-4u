import React, { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import Whatsapp from '../components/Whatsapp';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ii2tt4d', 'template_15qcyuv', form.current, 'iNEeKpL_mzTpIjCOh')
    form.current.reset();

   
  };

  const handleSubmit=()=>{

  }
  return (
    <div>
      <Whatsapp/>
      <NavigationBar />
      <div className='contact-contents'>
        <Container>
          <h2>Get in touch with us 👋</h2>
          <Form className='contact-form' ref={form} onSubmit={sendEmail}>
            <Row>
              <Col md={6}>
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' placeholder='Your Name' name="name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Your Email' name="email" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col md={6}>
            <Form.Group controlId='company'>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type='text' placeholder='Your Company Name' name="company" required />
                </Form.Group>
                </Col>

            <Col md={6}>
            <Form.Group controlId='phone'>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type='text' placeholder='Your Contact Number'  pattern='^\+(?:[0-9] ?){6,14}[0-9]$' title='Please enter your country code' name="mobile" required />
            </Form.Group>
            </Col>

            </Row>
            <Form.Group controlId='message'>
              <Form.Label>Message</Form.Label>
              <Form.Control as='textarea' rows={6} placeholder='Your Message'name="message" required  />
            </Form.Group>
            <Button variant='dark' type='submit' value="Send" onClick={handleSubmit} className='send-button'>
              Send Message
            </Button>
          </Form>
        </Container>
      </div>

      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  );
}