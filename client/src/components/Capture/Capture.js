import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./CaptureStyle.css";

const Capture = (props) => {

  let imagePreview = null;
  if (props.imageData) {
    imagePreview = (<img className="img-fluid" src={props.imageData} alt=""/>);
  }

  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Upload Photo</h3>
        <br />

        <div className="file-upload">
          <div className="file-select">
            <div className="file-select-button"><img style={{height: 20}} src="./images/camera-icon.png" alt="Choose Img"/></div>
            <div className="file-select-name">Click to upload or drag and drop your image here</div>
            <input type="file" onChange={props.handleImageChange} />
          </div>
          <br />
          <input type="url" onChange={props.handleInputChange} name="imageData" value={props.imageData} placeholder="Or enter an image URL" />
        </div>

        <div className="imgPreview">
          {imagePreview}
        </div>
        <br />
        <button style={{ margin: 5 }} className="btn btn-primary" disabled={!(props.imageData)} type="submit" onClick={props.handleBeerImage}>Find this beer!</button>

      </Jumbotron>
    </div>
  );
}

export default Capture;