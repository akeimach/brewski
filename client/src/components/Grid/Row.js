import React from "react";


export const Row = ({ fluid, children }) => {
  return (
    <div className={`row${fluid ? "-fluid" : ""}`}>
      {children}
    </div>
  );
}
