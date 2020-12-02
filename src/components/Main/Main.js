import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import InfoCard from "../InfoCard";
import Info from "../Info";
import venue from './images/venue.jpg';
import catering from './images/catering.jpg';
import lodging from './images/lodging.jpg';

const Main = () => {
    return (
<Container fluid className="p-0">
      {/* <Row>
        <Col className="col-12">
          <Carousel />
        </Col>
      </Row> */}
      <Row>
        <Col>
          <Info className="col-12" />
        </Col>
      </Row>
      <Row className="d-flex flex-wrap mb-5 pb-5">
        <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
          <InfoCard
            title="Venues"
            summary="Find the perfect venue"
            img={venue}
          />
        </Col>
        <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
          {' '}
          <InfoCard
            title="Catering"
            summary="Find the perfect dishes"
            img={catering}
          />
        </Col>
        <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
          {' '}
          <InfoCard
            title="Lodging"
            summary="Need a place to stay?"
            img={lodging}
          />
        </Col>
      </Row>
    </Container>

    )
}

export default Main;
