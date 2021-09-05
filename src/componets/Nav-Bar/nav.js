import React from "react";

import { Navbar, NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

import ThemeSwitch from "../ThemeSwitch/themeSwitch";


function NavigationBar(props){

  return(
    <>
      <Navbar variant="dark" expand="sm" sticky="top">
        <Container className="nav-container">
        <Navbar.Toggle aria-controls="raven-nav">
          <img
            src="./images/Logo/Oro-prup-black-solid.png"
            width="45px"
            margin="5px"
            className="d-inline-block align-top"
            alt="Ravenmoore logo"
            />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="raven-nav">
        <Navbar.Brand className="nav-logo">
          <img
            src="./images/Logo/Oro-prup-black-solid.png"
            width="45px"
            margin="5px"
            className="d-inline-block align-top"
            alt="Ravenmoore logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#artists">Artisans</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <NavDropdown title="Creative Spaces" id="basic-nav-dropdown">
              <NavDropdown.Item href="#workshop">Workshop</NavDropdown.Item>
              <NavDropdown.Item href="#menagerie">Menagerie</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#store">Store</Nav.Link>
          </Nav>
        </Navbar.Collapse>    
        </Container>
        <ThemeSwitch/>
      </Navbar>
    </>
  )
}

export default NavigationBar;