import React, { useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/UserContext';

const Login = () => {
  const { userData, handleInputChange, handleLogin } = useContext(UserContext);
  return (
    <div>
      <h2 className="loginTitle">Login</h2>
      <hr />
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button onClick={handleLogin} color="primary" block>
          Login
        </Button>
        <p className="signupLink">
          <Link to="/signup">dont have an account? Sign up here</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
