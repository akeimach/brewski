import React from "react";
import { Item } from "./Item";


export const ListSelect = (props) => {
  return (
    <button type="button" onClick={() => props.handleBeerSelect(props.id)} className="list-group-item list-group-item-action">
      <Item
        content={props.content}
      />
    </button>
  );
}