import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ links, linkStyling }) {
  return (
    <Navbar className="primary-color-theme" expand="lg" fixed="top">
      <Container>
        <Nav.Link key={"home"} href="/">
          <Navbar.Brand>J. Vallis-Walker</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={linkStyling}>{links.map((link) => link)}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
