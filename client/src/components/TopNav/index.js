import React, { useState, useContext } from 'react';
import logo from './imgs/smlogo.png';
import UserContext from '../../utils/UserContext';
import './style.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {  logout } = useContext(UserContext);
  // console.log("hello world", loggedIn)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar collapseOnSelect className="color-name" expand="lg" bg="light" variant="light">
      <NavbarBrand href="#home">
        <img
          src={logo}
          width="100"
          height="40"
          className="d-inline-block align-top"
          alt="logo"
        />
      </NavbarBrand>
      <NavbarBrand href="#Main">Planning | Budget | Checklist</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="fas fa-user-secret"></i>
              </DropdownToggle>
              <DropdownMenu right>
                {true ? (
                  <DropdownItem>
                    <NavLink onClick={logout}>Logout</NavLink>
                  </DropdownItem>
                ) : (
                  <>
                    <DropdownItem>
                      <NavLink href="/login">Login</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/signup">Signup</NavLink>
                    </DropdownItem>
                  </>
                )}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
