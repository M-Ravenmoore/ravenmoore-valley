import React, { useState, useEffect } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

function SiteMenu(props){

  const [themeState, setThemeState] = useState(false);
  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'light') return  document.body.classList.add('light');
  })

  return(
    <>
    <Navbar variant="dark" expand="sm" sticky="top">
      <Container className="nav-container">
        <Navbar.Toggle aria-controls="raven-nav" />
        <Navbar.Collapse id="raven-nav">
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
      <Navbar.Brand className="nav-logo" onClick={handleChange}>
        <img
          src="./images/Logo/Oro-prup-black-solid.png"
          width="45px"
          margin="5px"
          className="d-inline-block align-top"
          alt="Ravenmoore logo"
        />
        <p>{themeState ? 'Dark' : 'Light'}</p>
      </Navbar.Brand>
    </Navbar>
    </>
  )
}

export default SiteMenu;