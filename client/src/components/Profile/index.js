import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import InfoCard from "../InfoCard";
import Welcome from "../Welcome";
import budget from './images/budget.jpg';
import todo from './images/todo.jpg';
import guests from './images/guests.jpg';
import { useAuth0 } from "@auth0/auth0-react";


import './style.css';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (

    
    < Container fluid className = "p-0" >
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
      <Row className="d-flex flex-wrap mb-5 pb-5 justify-content-center">
        <div>
          <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
            <InfoCard
              className="card"
              title="Budget"
              summary="List of your budget!"
              img={budget}
              // link="/budget"
            />
          </Col>
        </div>
        <div>
          <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
            {' '}
            <InfoCard
              title="To-Do"
              summary="Create a to-do list!"
              img={todo}
              // link="/todo"
            />
          </Col>
        </div>
        <div>
          <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
            {' '}
            <InfoCard
              title="Guests"
              summary="Create a guest list!"
              img={guests}
              // link="/guests"
            />
          </Col>
        </div>
      </Row>
    </Container >
    )
  )
}

export default Profile;
