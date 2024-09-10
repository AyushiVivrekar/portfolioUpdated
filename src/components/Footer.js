import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import imageFooter from "../assests/footerBackground.avif"

function Footer() {
  return (
    <footer >
   <Card id="footer" style={{border:"none"}}>
    <CardBody>
   

<Container fluid>
  <Row>
    <Col xs={12} md={3}>

      <img src={imageFooter} width="40%" height="60%" style={{ borderRadius: "70%" }} className='movingImage ' />
      
    </Col>
    <Col md={5}>
    <div className='text-center mt-5'>
        <h3>Ayushi Vivrekar</h3>
        <p>Feel Free To Reach Me Out</p>
      </div>
    </Col>
    <Col md={4}>

      <div className="social-links">
        <div>
          <a href="https://join.skype.com/invite/w9qoEURr6l2B" className="google-plus mt-3" target="_blank">
            <FontAwesomeIcon icon={faSkype} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ayushi-vivrekar-1bb2321b1/" className="linkedin mt-3" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/ayushi_vivarekar25?igsh=eTkzd2F6bHNyc2t3" className="linkedin mt-3" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </Col>
   
  </Row>

</Container>

    </CardBody>
   </Card>
   </footer>
  );
}

export default Footer;
