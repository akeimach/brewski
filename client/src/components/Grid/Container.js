import React from "react";

export const Container = ({ fullwidth, fluid, children }) =>
  <div className={`container${fullwidth ? "-fullwidth" : ""}${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
