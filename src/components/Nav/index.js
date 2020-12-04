import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './imgs/smlogo.png';
import './style.css';


function Navagation() {
  return (
    <Navbar collapseOnSelect className="color-name" expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="100"
          height="40"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Brand href="#Main">Planning | Budget | Checklist</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Nav>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Signup</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Account</NavDropdown.Item>
          </NavDropdown>
          {/* <Nav.Link href="#signup">Signup</Nav.Link> */}
          {/* <Nav.Link eventKey={2} href="#login">
        Login
      </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navagation;