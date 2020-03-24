import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>Monday</Col>
          <Col>Tuesday</Col>
          <Col>Wednesday</Col>
          <Col>Thursday</Col>
          <Col>Friday</Col>
          <Col>Saturday</Col>
          <Col>Sunday</Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>M</Card.Title>
                <Card.Text>
                  Quick Text
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>Tuesday</Col>
          <Col>Wednesday</Col>
          <Col>Thursday</Col>
          <Col>Friday</Col>
          <Col>Saturday</Col>
          <Col>Sunday</Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;