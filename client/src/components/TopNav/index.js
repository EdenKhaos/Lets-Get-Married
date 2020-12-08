import React from 'react';
import logo from './imgs/smlogo.png';
// import UserContext from '../../utils/UserContext';
import './style.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav, Navbar } from 'react-bootstrap';
import LoginLink from '../LoginButton';
import ProfileLink from '../ProfileLink';
import LogoutLink from '../LogoutButton';
import SignupLink from '../Signup';


const Navigation = () => {
  const { isAuthenticated } = useAuth0();
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
    <Navbar.Collapse>
        {isAuthenticated ? (
          <Nav className="ml-auto color-link">
            <ProfileLink />
            <LogoutLink />
          </Nav>
        ) : (
          <Nav className="ml-auto color-link">
            <LoginLink />
            <SignupLink />
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
