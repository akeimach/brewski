import React from "react";
import ReactFileReader from "react-file-reader";
import { Jumbotron } from 'react-bootstrap';
import { Input } from "../Form"


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
        <button style={{ margin: 5 }} className="btn btn-primary" disabled={!(props.imageData)} onClick={props.handleBeerImage}>Search</button>
        <ReactFileReader base64={true} multipleFiles={false} handleFiles={props.handleBeerImage}>
          <button style={{ margin: 5 }} className="btn btn-primary">Upload</button>
        </ReactFileReader>
      </Jumbotron>
    </div>
  );
}

export default Capture;