import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav } from 'react-bootstrap';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <Nav.Link onClick={() => logout()}>
            Log Out
        </Nav.Link>
        )
    )
}

export default LogoutButton;