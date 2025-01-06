import { useState } from "react";
import Navigation from "./Navigation.jsx";
import Nav from "react-bootstrap/Nav";
import "../styles/index.css";

const links = [
  <Nav.Link key="about" href="/about">
    About Me
  </Nav.Link>,
  <Nav.Link key="portfolio" href="/portfolio">
    Projects
  </Nav.Link>,
  <Nav.Link key="contact" href="/contact">
    Contact
  </Nav.Link>,
];

function Header({ linkStyling }) {
  return (
    <div className="search-bar ui segement customHeader fs-6">
      <Navigation links={links} linkStyling={linkStyling} />
    </div>
  );
}

export default Header;
