import React from "react";
// import { Button } from 'react-bootstrap';
// import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

const Results = (props) => {

  return (
    <div>
      <br/>
        <Jumbotron>
        <h3>Image Recongnition Result</h3>
        <div>
          <p>{props.imageResults}</p>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Results;
