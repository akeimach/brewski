import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Capture from "../components/Capture";
import IdentifyBeer from "../components/IdentifyBeer";
import ShowReviews from "../components/ShowReviews";


const Home = (props) => {
  return (
    <Row>
      <Col size="5">
        <Row>
          <Container fluid>
            <Capture
              imageData={props.imageData}
              handleInputChange={props.handleInputChange}
              handleBeerImage={props.handleBeerImage}
            />
          </Container>
        </Row>
        <Row>
          <Container fluid>
            <IdentifyBeer
              breweryName={props.breweryName}
              beerName={props.beerName}
              abv={props.abv}
              description={props.description}
            />
          </Container>
        </Row>
      </Col>
      <Col size="7">
        <Container fluid>
          <ShowReviews
            beerReviews={props.beerReviews}
          />
        </Container>
      </Col>
    </Row>
  );
}

export default Home;