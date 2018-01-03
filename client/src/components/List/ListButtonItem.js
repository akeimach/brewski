import React from "react";
import { Row, Col } from "../Grid";
import { Item } from "./Item";


export const ListButtonItem = (props) => {
  return (
    <li className="list-group-item">
      <Row>
        <Col size="8">
          <Item
            content={props.content}
          />
        </Col>
        <Col size="4">
          <button className="btn btn-action" id={props.id} name={props.name} value={props.value} onClick={props.onClick}>{props.buttonValue}</button>
        </Col>
      </Row>
    </li>
  );
}