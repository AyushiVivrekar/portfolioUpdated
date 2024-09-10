import React from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'react-bootstrap'; 
import {PortfolioDetails} from './../getData/data';


const Portfolio = () => {
  const handleLinks = (linksAll) => {
    window.open(linksAll, '_blank');
  };
  return (
    <section id="portfolio" className="portfolio section-bg">
      <Container data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>

        </div>
        <Row>
          {PortfolioDetails.map((value, index) => (
            <Col key={index} lg={4} md={6} sm={1} className="" data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
              <Card  className='cardportfolio'>
      <Card.Img variant="top" src={value.imgUrl}  height="190vh" width="100%" className='portfolioImg'/>
      <Card.Body>
        <Card.Title className='textPortfolio'>{value.title}</Card.Title>
           <div className='overlayPortfolio'>
           <Card.Text className='descPortfolio'>
       <p className='p-2'> {value.description}</p>
        <div >
        <a
    href={value.links}
    style={{ color: 'orange' }}
    onClick={(e) => {
      e.preventDefault();
      handleLinks(value.links);
    }}
    target="_blank"
    rel="noopener noreferrer"
  >
    {value.links}
  </a>
        </div>
        </Card.Text>
           </div>
        <a  href={value.links} target='_blank'>{value.links}</a>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
