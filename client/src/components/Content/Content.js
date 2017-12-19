import React from "react";
import History from "./History";
import Home from "./Home";
import Reviews from "./Reviews";
import { Route } from "react-router-dom";


class Content extends React.Component {

  render() {
    return (
      <div>
        <Route exact path="(/|/home)" render={() => (
          <Home />
        )}/>
        <Route exact path="/reviews" render={() => (
          <Reviews />
        )}/>
        <Route exact path="/history" render={() => (
          <History />
        )}/>
      </div>
    );
  };
}

export default Content;
