import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import InfoCard from "../InfoCard";
import Carousel from "../Carousel";
import Header from "../Header";
import venue from './images/venue.jpg';
import catering from './images/catering.jpg';
import lodging from './images/lodging.jpg';


import './style.css';

const Main = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col className="col-12">
          <Carousel />
        </Col>
      </Row>
      <Row>
        <Col>
          <Header className="col-12" />
        </Col>
      </Row>
      <Row className="d-flex flex-wrap mb-5 pb-5 justify-content-center">
        <div>
          <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
            <InfoCard
              className="card"
              title="Venues"
              summary="Find the perfect venue!"
              img={venue}
              link="/venue"
            />
          </Col>
        </div>
        <div>
          <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
            {' '}
            <InfoCard
              title="Catering"
              summary="Find the perfect dishes!"
              img={catering}
              link="/catering"
            />
          </Col>
        </div>
        <div>
          <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
            {' '}
            <InfoCard
              title="Lodging"
              summary="Need a place to stay?"
              img={lodging}
              link="/lodging"
            />
          </Col>
        </div>
      </Row>
    </Container>

  )
}

export default Main;
