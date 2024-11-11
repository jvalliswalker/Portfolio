import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ links }) {
  return (
    <Navbar bg="primary" expand="lg" fixed="top">
      <Container>
        <Nav.Link key={"home"} href="/">
          <Navbar.Brand>J. Vallis-Walker</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{links.map((link) => link)}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
