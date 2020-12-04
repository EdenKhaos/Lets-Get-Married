import React from 'react';

const UserContext = React.createContext({
  userData: {},
  loggedIn: false,
  user: {},
  failureMessage: "",
  handleInputChange: () => {},
  handleLogin: () => {},
  handleSignup: () => {},
  logout: () => {},
});

export default UserContext;