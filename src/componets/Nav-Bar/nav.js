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
      <Nav.Link href="#about">about</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>

  )
}

export default NavigationBar;