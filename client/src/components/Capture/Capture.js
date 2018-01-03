import React from "react";
import ReactFileReader from "react-file-reader";
import { Jumbotron } from 'react-bootstrap';
import { Input, FormBtn } from "../Form"


const Capture = (props) => {
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Upload Photo</h3>
        <Input
          value={props.imageData}
          onChange={props.handleInputChange}
          name="imageData"
          placeholder="http://yourimage.com"
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