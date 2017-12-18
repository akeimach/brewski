import React from "react";
import { Col, Row, Container } from "../Grid";
import History from "./History";
import Home from "./Home";
import Reviews from "./Reviews";


class Content extends React.Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Home />
          </Row>
        </Container>
      </div>
    );
  };
}

export default Content;
