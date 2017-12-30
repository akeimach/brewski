import React from "react";
import { Jumbotron, Form, FormGroup, Col, ControlLabel, FormControl, Input } from 'react-bootstrap';



const ReviewDisplay = (props) => {

	return (
	    <div>
	     	<br />
	      	<Jumbotron>
		        <h1>Reviews You've Written</h1>
		       
		         <Form horizontal>
				    <FormGroup controlId="formHorizontalEmail">
				      <Col componentClass={ControlLabel} sm={2}>
				        Name
				      </Col>
				      <Col sm={10}>
				        <FormControl type="name" placeholder="John" />
				      </Col>
				    </FormGroup>

				    <FormGroup controlId="formHorizontalPassword">
				      <Col componentClass={ControlLabel} sm={2}>
				        Beer Score
				      </Col>
				      <Col sm={10}>
				        <FormControl type="beerScore" placeholder="5" />
				      </Col>
				    </FormGroup>

				    <FormGroup controlId="formHorizontalReview">
				      <Col componentClass={ControlLabel} sm={2}>
				        Beer Review
				      </Col>
				      <Col sm={10}>
				        <FormControl componentClass="textarea" type="beerReview" placeholder="Review" />
				      </Col>
				    </FormGroup>
				   
				    <button className='btn-submit'>Submit</button>


				 </Form>

	      	</Jumbotron>
	    </div>
  	);

}

export default ReviewDisplay;



