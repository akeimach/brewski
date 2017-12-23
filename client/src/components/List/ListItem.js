import React from "react";
import { Container, Row, Col } from "../Grid";
import { FormBtn } from "../Form";


export const ListItem = props =>
  <li className="list-group-item">
    <Container fluid>
      <Row fluid>
        <Col size="8">
          <h5>Score: {props.beerScore}</h5>
          <h5>Review: {props.beerRev}</h5>
        </Col>
      </Row>
    </Container>
  </li>;