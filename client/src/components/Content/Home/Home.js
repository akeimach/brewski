import React from "react";
import { Col, Row } from "../../Grid";
import APIReviews from "./APIReviews";
import Capture from "./Capture";
import Results from "./Results";

const Home = (props) => {
    return (
      <div className="container">
        <div>
          <Row>
            <Col size="4">
              <Row>
                <Capture
                  imageData={props.imageData}
                  handleInputChange={props.handleInputChange}
                  handleBeerImage={props.handleBeerImage}
                />
              </Row>
              <Row>
                <Results
                  imageResults={props.imageResults}
                />
              </Row>
            </Col>
            <Col size="8">
              <APIReviews />
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default Home;
