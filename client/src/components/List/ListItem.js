import React from "react";
import { Row, Col } from "../Grid";
import { Item } from "./Item";


export const ListItem = (props) => {
  return (
    <li className="list-group-item">
      {props.addButton ? (
        <Row>
          <Col size="8">
            <Item
              content={props.content}
            />
          </Col>
          <Col size="4">
            <button style={{ margin: 5 }} className="btn btn-dark" id={props.id} name={props.name} value={props.value} onClick={props.onClick}>{props.buttonValue}</button>
          </Col>
        </Row>
      ) : (
        <Item
          content={props.content}
        />
      )}
    </li>
  );
}