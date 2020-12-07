import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InfoCard = (props) => {
  return (
    <Card
      style={{ width: '20rem' }}
      className="card-hover-style m-auto custom-margin"
    >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="cards-component-title">
          {props.title}
        </Card.Title>
        <Card.Text className="cards-component-text">
          <Link href={props.link} target="_blank">{props.summary}</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;