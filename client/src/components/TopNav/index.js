import React, { useState, useContext } from 'react';
import logo from './imgs/smlogo.png';
// import UserContext from '../../utils/UserContext';
import './style.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav, Navbar } from 'react-bootstrap';
import Login from '../LoginButton';

const Navigation = () => {
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
    <Navbar.Brand href="#home">Planning | Budget | Checklists</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        
      </Nav>
      <Nav>
        <Login />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  ) 
};
export default Navigation;
