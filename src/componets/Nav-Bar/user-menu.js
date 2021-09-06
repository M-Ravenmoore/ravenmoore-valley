import React from "react";
import { Navbar} from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

function UserMenu(props){

  return(
    <>
    <Navbar variant="dark" expand="xxl" sticky="top">
        <Container className="user-container">
        <Navbar.Toggle aria-controls="user-nav" />
        <Navbar.Collapse id="user-nav">
          <Nav className="user-auto">
            <Nav.Link href="#">Login/signup</Nav.Link>
            {/* on loged in ==true */}
            {/* <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>    
        </Container>
      </Navbar>
    </>
  )
}

export default UserMenu;
        