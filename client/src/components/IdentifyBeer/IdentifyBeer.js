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
        {props.beerName.length ? (
          <Item
            content={[(`Name: ${props.beerName}`), (`Brewery: ${props.breweryName}`), (`ABV: ${props.beerAbv}`), (`Description: ${props.beerShortDes}`)]}
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