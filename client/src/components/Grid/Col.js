import React from "react";


export const Col = ({ size, children }) => {
  return (
    <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
      {children}
    </div>
  );
}
