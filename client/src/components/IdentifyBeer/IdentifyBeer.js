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
        {sessionStorage.getItem("visionBeerName") ? (
          <Item
            content={[
              (`Name: ${sessionStorage.getItem("visionBeerName")}`), 
              (`Brewery: ${sessionStorage.getItem("visionBreweryName")}`), 
              (`ABV: ${sessionStorage.getItem("visionBeerAbv")}%`), 
              (`IBU: ${sessionStorage.getItem("visionBeerIbu")}`), 
              (`Food Pairings: ${sessionStorage.getItem("visionBeerFoodPairings")}`), 
              (`Organic: ${sessionStorage.getItem("visionBeerIsOrganic") === "Y" ? "Yes" : "No"}`), 
              (`Description: ${sessionStorage.getItem("visionBeerShortDes")}`)
            ]}
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