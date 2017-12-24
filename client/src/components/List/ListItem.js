import React from "react";
import Modal from "react-responsive-modal";
import { Row, Col } from "../Grid";


export const ListItem = (props) => {
  return (
    <li className="list-group-item">
      <Row>
        <Col size="8">
          <h5>Score: {props.beerScore}</h5>
          <h5>Review: {props.beerRev}</h5>
        </Col>
        <Col size="4">
          <button className="btn btn-action" name="reviewModalOpen" onClick={props.toggleModal}>Review This Beer</button>
          <Modal open={props.reviewModalOpen} onClose={props.toggleModal} little>
            <br />
            <h2>Add your review</h2>
          </Modal>
        </Col>
      </Row>
    </li>
  );
}