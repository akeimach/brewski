import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ marginBottom: 10 }} className="btn btn-primary">
    {props.name}
  </button>;
