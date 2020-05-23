import React from 'react';
import { Row, Col, Container } from 'reactstrap';

function Footer() {
  return (
    <div className="justify-content-center text-center bg-dark text-light py-3">
      <Container>
        <Row>
          <Col><strong>Day</strong></Col>
          <Col><strong>Hours</strong></Col>
        </Row>
        <Row>
          <Col>Monday - Thursday</Col>
          <Col>10:00 AM - 10:00 PM</Col>
        </Row>
        <Row>
          <Col>Friday - Saturday</Col>
          <Col>10:00 AM - 10:30 PM</Col>
        </Row>
        <Row>
          <Col>Sunday</Col>
          <Col>12:00 PM - 9:30 PM</Col>
        </Row>
        <Row>
          <Col>&copy; 2020 China II</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;