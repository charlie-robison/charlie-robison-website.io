import pic from '../images/cover-image.png';
import { Col, Container, Row } from 'react-bootstrap';

/** Shows the about me section of the page. */
export const About = () => {
  return (
    <Container>
      <Row>
        <Col xs="7"><img src={pic} width="256" height="256" /></Col>
        <Col xs="2">
          <Row>
            <Col><h2>About Me</h2></Col>
          </Row>
          <Row>
            <Col><p>Description</p></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
