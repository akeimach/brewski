import React from "react";
import { Button, Jumbotron } from 'react-bootstrap';


const IdentifyBeer = (props) => {
  return (
    <div>
      <br/>
      <Jumbotron>
        <h1>Your identified beer</h1>
        <div>
        {props.beerName.length ? (
          <div>
            <h5>Name: {props.beerName}</h5>
            <h5>ABV: {props.abv}</h5>
            <h5>Description: {props.description}</h5>
          </div>
        ) : (
          <h5>Nothing here yet</h5>
        )}
        </div>
      </Jumbotron>
    </div>
  );
}

export default IdentifyBeer;