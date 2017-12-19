import React from "react";
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const APIReviews = (props) => {
  return (
    <div>
    	<br/>
        <Jumbotron>
		    <h1>Beer Reviews!</h1>

		    <div>
		    <p>Beer rating go here</p>
		    <p><Button bsStyle="primary">Submit</Button></p>

		    </div>


		</Jumbotron>
    </div>
  );
}

export default APIReviews;