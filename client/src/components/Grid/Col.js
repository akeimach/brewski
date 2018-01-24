import React from "react";


export const Col = ({ size, children }) => {
  return (
    <div className={size.split(" ").map(size => "width-" + size).join(" ")}>
      {children}
    </div>
  );
}
