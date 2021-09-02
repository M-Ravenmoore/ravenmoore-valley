import React from "react";

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

import ThemeSwitch from "../ThemeSwitch/themeSwitch";


function NavigationBar(props){

  return(

    <>
  <Navbar variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#/">
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
      <Nav.Link href="#workshop">Workshop</Nav.Link>
      <Nav.Link href="#menagerie">Menagerie</Nav.Link>
      <Nav.Link href="#store">Store</Nav.Link>
      <ThemeSwitch/>
    </Nav>
    </Container>
  </Navbar>
  
</>

  )
}

export default NavigationBar;