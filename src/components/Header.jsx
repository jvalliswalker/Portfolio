import { useState } from "react";
// import { Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Nav from "react-bootstrap/Nav";

import "../styles/index.css";

const links = [
  <Nav.Link key={"about"} href="/about">
    About Me
  </Nav.Link>,
  <Nav.Link key={"portfolio"} href="/portfolio">
    Portfolio
  </Nav.Link>,
  <Nav.Link key={"contact"} href="/contact">
    Contact
  </Nav.Link>,
  <Nav.Link key={"resume"} href="/resume">
    Resume
  </Nav.Link>,
];

function Header() {
  return (
    <div className="search-bar ui segement customHeader">
      <Navigation links={links} />
    </div>
  );
}

export default Header;
