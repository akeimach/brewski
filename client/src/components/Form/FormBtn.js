import React from "react";


export const FormBtn = (props) => {
  return (
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-primary">
      {props.name}
    </button>
  );
}
