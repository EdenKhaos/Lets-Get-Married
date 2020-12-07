import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import InfoCard from "../../components/InfoCard";
import Welcome from "../../components/Welcome";
import budget from './images/budget.jpg';
import todo from './images/todo.jpg';
import guests from './images/guests.jpg';
import { useAuth0 } from "@auth0/auth0-react";


import './style.css';

const ProfilePage = () => {
  const { user } = useAuth0();
  console.log(user)
  return (
    <Container fluid className = "p-0" >
      <Row>
        <div>
        <Col>
          <Welcome className="col-12" />
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </Col>
        </div>
      </Row>
    </Container >
  )
}

export default ProfilePage;

