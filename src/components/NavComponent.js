import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import logo from "../photos/logo.png";

const NavComponent = () => {
  return (
    <header>
      <Navbar fixed="top" expand="md" className="nav">
        <img src={logo} alt="logo" className="logo" />
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://www.instagram.com/secretbase_partyroom/"
              alt="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="ins-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavComponent;
