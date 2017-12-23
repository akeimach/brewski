import React from "react";
import { Button, Jumbotron } from 'react-bootstrap';
// import axios from "axios";


const IdentifyBeer = (props) => {

  return (
    <div>
      <br/>
      <Jumbotron>
        <h1>Beer Information!</h1>
        <div>
          <h5>Name: {props.beerName} <br/>
               ABV: {props.abv} <br />
               Description: {props.description}
          </h5>
          <p><Button bsStyle="primary">Submit</Button></p>
        </div>
      </Jumbotron>
    </div>
  );
}


export default IdentifyBeer;





