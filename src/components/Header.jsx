import { useState } from "react";
// import { Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Nav from "react-bootstrap/Nav";

import "../styles/index.css";

const links = [
  <Nav.Link key={"home"} href="/">
    Home
  </Nav.Link>,
  <Nav.Link key={"about"} href="/About">
    About
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
