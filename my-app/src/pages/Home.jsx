import { Container, Row, Col } from 'react-bootstrap';
import { About } from '../components/About';
import { Careers } from '../components/Careers';

/** The home page of the application. */
export const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
       <Col className='text-center'>
          <h1>Charlie Robison</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <About />
        </Col>
      </Row>
      <br /><br />
      <Row className="justify-content-md-center">
        <Col>
          <Careers />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className='text-center'>
          <h1>Skills</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className='text-center'>
          <h1>Projects</h1>
        </Col>
      </Row>
    </Container>
  );
};
