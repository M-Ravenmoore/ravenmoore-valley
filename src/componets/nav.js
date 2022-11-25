import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ThemeSwitch from "./theme-switch";

function NavigationBar(props){
  return(
    <div className="nav-bar">
    <Navbar className="site-menu" expand="lg" variant="dark"  sticky="top">
      <Container className="nav-container">
        <Navbar.Toggle aria-controls="raven-nav" />
        <Navbar.Collapse id="raven-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/about">About</Nav.Link>
            <ThemeSwitch />
            <Nav.Link href="#/artists">Artisans</Nav.Link>
            <Nav.Link href="#/shops">Shops</Nav.Link>
            <Nav.Link href="#/news">News</Nav.Link>
          </Nav>
        </Navbar.Collapse>    
      </Container>
    </Navbar>

    
    </div>
  )
}

export default NavigationBar;