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
        {localStorage.getItem("visionBeerName") ? (
          <Item
            content={[(`Name: ${localStorage.getItem("visionBeerName")}`), (`Brewery: ${localStorage.getItem("visionBreweryName")}`), (`ABV: ${localStorage.getItem("visionBeerAbv")}`), (`Description: ${localStorage.getItem("visionBeerShortDes")}`)]}
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