import React from 'react';
import NavigationBar from '../components/Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <NavigationBar />
      <div className='contact-contents'>
        <Container>
          <h2>Get in touch with us 👋</h2>
          <Form className='contact-form'>
            <Row>
              <Col md={6}>
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' placeholder='Your Name' required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Your Email' required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId='phone'>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type='tel' placeholder='Your Contact Number' required />
            </Form.Group>
            <Form.Group controlId='message'>
              <Form.Label>Message</Form.Label>
              <Form.Control as='textarea' rows={6} placeholder='Your Message' required />
            </Form.Group>
            <Button variant='dark' type='submit' className='send-button'>
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
