import React from "react";
import { Button } from 'react-bootstrap';
// import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

const ReviewDisplay = (props) => {

  return (
    <div>
      <p>ReviewDisplay testing</p>
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
    </div>
  );
}

export default ReviewDisplay;