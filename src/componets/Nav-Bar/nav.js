import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ThemeSwitch from "./theme-switch";


function NavigationBar(props){

  return(
    <>
    <div className="nav-bar">
    <Navbar className="site-menu" expand="lg" variant="dark"  sticky="top">
      <Container className="nav-container">
        <Navbar.Toggle aria-controls="raven-nav" />
        <Navbar.Collapse id="raven-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#artists">Artisans</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
          </Nav>
        </Navbar.Collapse>    
      </Container>
    </Navbar>

    <ThemeSwitch />
    <Navbar className="user-menu"  variant="dark" expand="xxxl" sticky="top"> 
      <Container expand="xxl" className="user-container">
        <Navbar.Toggle aria-controls="user-nav" />
        <Navbar.Collapse id="user-nav">
          <Nav className="user-auto">
            {/* give icon of key and lock for login or log out??? */}
            <Nav.Link href="#">Login/signup</Nav.Link>
            {/*if conditional show only on loged in ==true once login is setup */}
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>    
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default NavigationBar;