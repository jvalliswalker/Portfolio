import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/index.css";

function Footer() {
  return (
    <div className="customFooter">
      <Navbar className="bg-primary" fixed="bottom">
        <Container>Footer placeholder</Container>
      </Navbar>
    </div>
  );
}

export default Footer;
