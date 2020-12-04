import React, { useState, useContext } from 'react';
import UserContext from '../../utils/UserContext';
import './TopNav.scss';
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
  const { loggedIn, logout } = useContext(UserContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar className="navbar" light expand="md">
        <NavbarBrand href="/">React Auth</NavbarBrand>
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
                {loggedIn ? (
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
