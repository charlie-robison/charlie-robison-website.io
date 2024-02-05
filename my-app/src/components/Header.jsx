import { Nav, Navbar, Container } from 'react-bootstrap';

/** NavBar for the website. */
export const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/">Charlie Robison</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" key="home">Home</Nav.Link>
          <Nav.Link to="/skills" key="skills">Skills</Nav.Link>
          <Nav.Link to="/careers" key="careers">Careers</Nav.Link>
          <Nav.Link to="/projects" key="projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
