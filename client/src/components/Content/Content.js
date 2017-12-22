import React from "react";
import History from "./History";
import Home from "./Home";
import Reviews from "./Reviews";
import { Route } from "react-router-dom";


const Content = (props) => {

    return (
      <div>
        <Route exact path="(/|/home)" render={() => (
          <Home
            imageData={props.imageData}
            imageResults={props.imageResults}
            handleInputChange={props.handleInputChange}
            handleBeerImage={props.handleBeerImage}
          />
        )}/>
        <Route exact path="/reviews" render={() => (
          <Reviews />
        )}/>
        <Route exact path="/history" render={() => (
          <History
            userHistory={props.userHistory}
          />
        )}/>
      </div>
    );

}

export default Content;
