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
            <Capture {...props} />
          </Container>
        </Row>
        <Row>
          <Container fluid>
            <IdentifyBeer {...props} />
          </Container>
        </Row>
      </Col>
      <Col size="7">
        <Row>
          <Container fluid>
            <ShowReviews />
          </Container>
        </Row>
      </Col>
    </Row>
  );
}

export default Home;