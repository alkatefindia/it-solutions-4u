import React, { useRef } from 'react';
import NavigationBar from '../components/Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p6fl8op', 'template_7qk9jig', form.current, 'CCdujmNOOWWR1EEcX')
   
  };

  return (
    <div>
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
            <Form.Group controlId='phone'>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type='tel' placeholder='Your Contact Number' name="user-mobile" required />
            </Form.Group>
            <Form.Group controlId='message'>
              <Form.Label>Message</Form.Label>
              <Form.Control as='textarea' rows={6} placeholder='Your Message' required />
            </Form.Group>
            <Button variant='dark' type='submit' value="Send" className='send-button'>
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