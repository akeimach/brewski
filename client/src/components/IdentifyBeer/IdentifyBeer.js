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
          <div>
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
            {props.visionUpdate ? ( //only show the buttons for newly identified beers
              <div>
                <br />
                <p>Was this beer correctly identified?</p>
                <div className="btn-group">
                  <button style={{ margin: 5, marginRight: 0 }} className="btn btn-success" type="button" onClick={() => props.handleFeedback(true)}>Correct</button>
                  <button style={{ margin: 5, marginLeft: 0 }} className="btn btn-warning" type="button" onClick={() => props.handleFeedback(false)}>Incorrect</button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <p>Nothing here yet</p>
        )}
        </div>
      </Jumbotron>
    </div>
  );
}

export default IdentifyBeer;