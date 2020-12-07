import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from "../../components/Welcome";
import Footer from '../../components/Footer';
import ProfileNav from '../../components/ProfileNav';
import { useAuth0 } from "@auth0/auth0-react";


import './style.css';

const ProfilePage = () => {
  const { user } = useAuth0();
  console.log(user)
  return (
    <Container fluid className = "p-0" >
      <ProfileNav />
      <Row>
        <div className="center-screen">
        <Col>
          <Welcome className="col-12" />
          <img className="profile" src={user.picture} alt={user.name} />
          <h2 className="name">{user.name}</h2>
          <p className="email">{user.email}</p>
        </Col>
        </div>
      </Row>
      <Footer />
    </Container >
  )
}

export default ProfilePage;

