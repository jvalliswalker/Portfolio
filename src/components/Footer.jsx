import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";

import "../styles/index.css";

function Footer() {
  return (
    <div className="customFooter">
      <Navbar className="bg-primary" fixed="bottom">
        <Container fluid>Footer placeholder</Container>
      </Navbar>
    </div>
  );
}

export default Footer;
