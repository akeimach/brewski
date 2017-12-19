import React from "react";
import { Col, Row } from "../../Grid";
import APIReviews from "./APIReviews";
import Capture from "./Capture";
import Results from "./Results";

class Home extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col size="4">
            <Row>
              <Capture />
            </Row>
            <Row>
              <Results />
            </Row>
          </Col>
          <Col size="8">
            <APIReviews />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
