import React from 'react';
import logo from './imgs/smlogo.png';
import './style.css'; 
import { Nav, Navbar } from 'react-bootstrap';
import LogoutLink from '../LogoutButton';
import GuestListButton from '../../components/GuestListButton';
import BudgetButton from '../../components/BudgetButton';


const ProfileNavigation = () => {
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
                <Nav className="ml-auto color-link">
                    <GuestListButton />
                    <BudgetButton />
                    <LogoutLink />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default ProfileNavigation;