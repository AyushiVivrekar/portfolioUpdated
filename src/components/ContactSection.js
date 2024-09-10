
import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

function ContactSection() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    success: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vufehwh', 'template_9ixqal9', form.current, 'mulHZ8rerSzCBjH_k')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus({ success: true, message: 'Message sent successfully!' });
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
        }
      );
  };

  return (
    <>
      <div className='backOverlapAcademic'>
      <div className='contact' id="contact">
      <Container data-aos="fade-up">
        <div className="section-title">
          <h2 className='text-light mt-5 pt-4' >Contact</h2>
        </div>
        <Row className="mt-1">
          <Col lg={4}>
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt heartbeat">
                  <FontAwesomeIcon icon={faLocationDot}  />
                </i>
                <h4>Location:</h4>
                <p>Indore, Madhya Pradesh</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope heartbeat">
                  <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />
                </i>
                <h4>Email:</h4>
                <p>ayushi.viva@gmail.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone heartbeat">
                  <FontAwesomeIcon icon={faPhone} className="phoneIcon" />
                </i>
                <h4>Call:</h4>
                <p>+91 6362628548</p>
              </div>
            </div>
          </Col>
          <Col lg={8} className="mt-5 mt-lg-0 mb-5">
            <Form className="php-email-form" ref={form} onSubmit={sendEmail}>
              <Row>
                <Col md={6} className="form-group">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Col>
                <Col md={6} className="form-group mt-3 mt-md-0">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Col>
              </Row>
              <Form.Group className="mt-2">
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <div className="text-center mt-3">
                <Button type="submit">Send Message</Button>
              </div>
              {status.message && (
                <div
                  className={`alert ${status.success ? 'alert-success' : 'alert-danger'}`}
                >
                  {status.message}
                </div>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
      
      </div>
      <div className='backgroundParallax'></div>
      </div>
    </>
  );
}

export default ContactSection;
