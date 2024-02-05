import { Nav, Navbar, Container } from 'react-bootstrap';

/** NavBar for the website. */
export const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Charlie Robison</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#careers">Careers</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
