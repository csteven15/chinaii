import React from 'react'
import { Row, Col, Container } from 'reactstrap'

export default function Footer() {
  const daysAndTimes = [
    {
      day: "Monday - Thursday",
      time: "10:30 AM - 9:30 PM"
    },
    {
      day: "Friday - Saturday",
      time: "10:30 AM - 10:30 PM"
    },
    {
      day: "Sunday",
      time: "12:00 PM - 9:00 PM"
    }
  ]

  return (
    <div className="justify-content-center text-center bg-dark text-light">
      <Container>
        <Row className="font-weight-bold">
          <Col className="text-right">Day</Col>
          <Col className="text-left">Hours</Col>
        </Row>
        {
          daysAndTimes.map(row => (
            <Row key={row.day}>
              <Col className="text-right">{row.day}</Col>
              <Col className="text-left">{row.time}</Col>
            </Row>
          ))
        }
        <Row>
          <Col>&copy; 2020 China II</Col>
        </Row>
      </Container>
    </div>
  )
}