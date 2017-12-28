import React from "react";
import Modal from "react-responsive-modal";
import { Row, Col } from "../Grid";
import { Item } from "./Item";


export const ListItem = (props) => {
  return (
    <li className="list-group-item">
      <Row>
        <Col size="8">
          <Item
            content={props.content}
          />
        </Col>
        <Col size="4">
          {props.toggleModal ? (
            <div>
              <button className="btn btn-action" name="reviewModalOpen" onClick={props.toggleModal}>{props.buttonValue}</button>
              <Modal open={props.reviewModalOpen} onClose={props.toggleModal} little>
                <br />
                <h2>{props.modalValue}</h2>
              </Modal>
            </div>
          ) : (
            <p></p>
          )}
        </Col>
      </Row>
    </li>
  );
}