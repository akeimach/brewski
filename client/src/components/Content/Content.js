import React from "react";
import { Col, Row, Container } from "../Grid";
import History from "./History";
import Home from "./Home";
import Reviews from "./Reviews";
import { Route } from "react-router-dom";



class Content extends React.Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Route exact path="(/|/home)" render={() => (
              <Home />
            )}/>
            <Route exact path="/reviews" render={() => (
              <Reviews />
            )}/>
            <Route exact path="/history" render={() => (
              <History />
            )}/>
          </Row>
        </Container>
      </div>
    );
  };
}

export default Content;
