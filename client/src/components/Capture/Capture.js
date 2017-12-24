import React from "react";
import ReactFileReader from "react-file-reader";
import { Jumbotron } from 'react-bootstrap';
import { Input, FormBtn } from "../Form"


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
        <ReactFileReader base64={true} multipleFiles={false} handleFiles={props.handleBeerImage}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
      </Jumbotron>
    </div>
  );
}

export default Capture;