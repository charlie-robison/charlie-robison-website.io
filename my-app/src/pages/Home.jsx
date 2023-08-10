import { Container, Row, Col } from 'react-bootstrap';
import { About } from '../components/About';

/** The home page of the application. */
export const Home = () => {
  return (
    <Container className='align-content-center'>
      <Row className="justify-content-md-center">
       <Col className='text-center'>
          <h1>Charlie Robison</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className='text-center'>
          <About />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className='text-center'>
          <h1>Careers</h1>
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
