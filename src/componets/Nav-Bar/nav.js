import React from "react";

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
function NavigationBar(props){

  return(

    <>
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#">RVM</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#/">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#artists">Artisan Directory</Nav.Link>
      <Nav.Link href="#news">News/Community Bulitin</Nav.Link>
      <Nav.Link href="#workshop">Muninn's Workshop</Nav.Link>
      <Nav.Link href="#menagerie">Huginn's Menagerie</Nav.Link>
      <Nav.Link href="#store">Store</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>

  )
}

export default NavigationBar;