import React from "react";

const Row = props =>
  <div class={`row${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Row;