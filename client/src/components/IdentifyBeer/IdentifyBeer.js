import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Item } from "../List";

const IdentifyBeer = (props) => {
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Your Identified Beer</h3>
        <div>
        {props.visionBeerName.length ? (
          <Item
            content={[(`Name: ${props.visionBeerName}`), (`Brewery: ${props.visionBreweryName}`), (`ABV: ${props.visionBeerAbv}`), (`Description: ${props.visionBeerShortDes}`)]}
          />
        ) : (
          <p>Nothing here yet</p>
        )}
        </div>
      </Jumbotron>
    </div>
  );
}

export default IdentifyBeer;