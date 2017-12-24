import React from "react";


export const Input = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input className="form-control" {...props} />
    </div>
  );
}
