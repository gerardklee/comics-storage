import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import './App.css';
import toughLife from './pics/tough_life.png';
import randomPeople from './pics/random_people.png';
import yumiCells from './pics/yumi.png';
import romanceRevolution from './pics/romance_revolution.png';
import lookism from './pics/lookism.png';
import tigers from './pics/tigers.png';
import fightSchool from './pics/learn_fight.png';


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
            <Figure>
              <Figure.Image
                roundedCircle={true}
                thumbnail={true}
                width={100}
                height={100}
                src={toughLife}
              />
              <Figure.Caption>
                Tough Life
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                roundedCircle={true}
                thumbnail={true}
                width={143}
                height={100}
                src={randomPeople}
              />
              <Figure.Caption>
                Random People
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                roundedCircle={true}
                thumbnail={true}
                width={125}
                height={50}
                src={yumiCells}
              />
              <Figure.Caption>
                Yumi's Cells
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                roundedCircle={true}
                thumbnail={true}
                width={105}
                height={120}
                src={romanceRevolution}
              />
              <Figure.Caption>
                Romance Revolution
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                roundedCircle={true}
                thumbnail={true}
                width={93}
                height={100}
                src={lookism}
              />
              <Figure.Caption>
                Lookism
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                roundedCircle={true}
                thumbnail={true}
                width={136}
                height={100}
                src={tigers}
              />
              <Figure.Caption>
                Tigers
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                roundedCircle={true}
                thumbnail={true}
                width={102}
                height={100}
                src={fightSchool}
              />
              <Figure.Caption>
                Fight School
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;