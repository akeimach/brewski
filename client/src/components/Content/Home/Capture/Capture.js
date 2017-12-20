import React from "react";
// import axios from "axios";
import { Button } from 'react-bootstrap';
// import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Input, FormBtn } from "../../../Form"


const Capture = (props) => {

  return (
    <div>
      <br/>
      <Jumbotron>
        <h1>Take Photo</h1>
        <Input
          value={props.imageData}
          onChange={props.handleInputChange}
          name="imageData"
          placeholder="http://yourimage.com"
          label="Image URL"
          type="url"
        />
        <FormBtn
          name="Search"
          disabled={!(props.imageData)}
          onClick={props.handleBeerImage}
        />
      </Jumbotron>
    </div>
  );
}

export default Capture;
