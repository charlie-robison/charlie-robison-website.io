import pic from '../images/cover-image.png';
import { Col, Container, Row } from 'react-bootstrap';

/** Shows the about me section of the page. */
export const About = () => {
  return (
    <Container>
      <Row>
        <Col xs="6"><img src={pic} width="256" height="256" /></Col>
        <Col xs="5">
          <Row>
            <Col><h2>About Me</h2></Col>
          </Row>
          <Row>
            <Col><p>With a love of solving problems and creating new technology for the world, computer science and software engineering has not only been my career but also a passion. I have focused mostly on website and application development for a couple years but also have worked on personal and group projects involving other forms of software engineering. I currently work for the atmospheric science department at the University of Hawaii creating web applications such as a Hurricane Path predictor and a pressure system blocking frequency predictor. I also currently work for the Hawaii Digital Health Lab developing in a group a web application featuring video games that will be used to help diagnose development delays.</p></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
