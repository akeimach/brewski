import React from "react";
import { List, ListItem } from "../components/List";
import { Jumbotron } from "react-bootstrap";

const Reviews = (props) => {
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Your Reviews</h3>
        <div>
        {props.userHistory.length ? (
          <List>
            {props.userHistory.map(review => {
              return (
                <ListItem
                  key={review.id}
                  id={review.id}
                  content={[(`${review.Beer.beername}`), (`Score: ${review.beerScore}`), (`Review: ${review.beerRev}`)]}
                />
              );
            })}
          </List>
        ) : (
          <h3>Nothing here yet</h3>
        )}
        </div>
      </Jumbotron>
    </div>
  );
}

export default Reviews;










// import { Jumbotron, Form, FormGroup, Col, ControlLabel, FormControl, Input } from 'react-bootstrap';

// const ReviewDisplay = (props) => {

// 	return (
// 	    <div>
// 	     	<br />
// 	      	<Jumbotron>
// 		        <h1>Reviews You've Written</h1>
		       
// 		         <Form horizontal>
// 				    <FormGroup controlId="formHorizontalEmail">
// 				      <Col componentClass={ControlLabel} sm={2}>
// 				        Name
// 				      </Col>
// 				      <Col sm={10}>
// 				        <FormControl type="name" placeholder="John" />
// 				      </Col>
// 				    </FormGroup>

// 				    <FormGroup controlId="formHorizontalPassword">
// 				      <Col componentClass={ControlLabel} sm={2}>
// 				        Beer Score
// 				      </Col>
// 				      <Col sm={10}>
// 				        <FormControl type="beerScore" placeholder="5" />
// 				      </Col>
// 				    </FormGroup>

// 				    <FormGroup controlId="formHorizontalReview">
// 				      <Col componentClass={ControlLabel} sm={2}>
// 				        Beer Review
// 				      </Col>
// 				      <Col sm={10}>
// 				        <FormControl componentClass="textarea" type="beerReview" placeholder="Review" />
// 				      </Col>
// 				    </FormGroup>
				   
// 				    <button className='btn-submit'>Submit</button>


// 				 </Form>

// 	      	</Jumbotron>
// 	    </div>
//   	);

// }

// export default ReviewDisplay;



