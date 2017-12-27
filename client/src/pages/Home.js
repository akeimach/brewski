import React from "react";
import { Col, Row } from "../components/Grid";
import Capture from "../components/Capture";
import IdentifyBeer from "../components/IdentifyBeer";


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
              <IdentifyBeer
                breweryName={props.breweryName}
                beerName={props.beerName}
                abv={props.abv}
                description={props.description}
              />
            </Row>
          </Col>
          <Col size="8">
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;