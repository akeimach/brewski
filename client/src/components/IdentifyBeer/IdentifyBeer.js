import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Item } from "../List";


const IdentifyBeer = (props) => {
  return (
    <div>
      <br/>
      <Jumbotron>
        <h1>Your identified beer</h1>
        <div>
        {props.beerName.length ? (
          <Item
            content={[(`Name: ${props.beerName}`), (`Brewery: ${props.breweryName}`), (`ABV: ${props.abv}`), (`Description: ${props.description}`)]}
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