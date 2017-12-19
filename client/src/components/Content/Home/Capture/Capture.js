import React from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';



const Capture = (props) => {

  return (
    <div>

    	<br/>
        <Jumbotron>
		    <h1>Take Photo</h1>
		    <label>
				Image URL: {" "}
				<input type="text" name="name" />
			</label>
		  
		    <p><Button id="imageCapture" bsStyle="primary">Submit</Button></p>
		</Jumbotron>


    </div>
  );
}

export default Capture;
