import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Input } from "../Form"


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
        <form>
          <Input type="file" onChange={props.handleImageChange} />
          <Input onChange={props.handleInputChange} name="imageData" placeholder="http://yourimage.com" type="url" />
        </form>
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