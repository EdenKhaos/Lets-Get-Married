import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/UserContext';

const Welcome = () => {
  const { user, loggedIn, logout } = useContext(UserContext);
  return (
    <div className="profileBox">
      {loggedIn ? (
        <div>
          <h1> Welcome back {user && user.firstname},To Planning Your Big Day!</h1>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <div>
          <h1> Log in to view this page </h1>
          <Link to="/login">
            <Button> Login </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Welcome;