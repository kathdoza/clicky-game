import React from "react";

const Container = props => {
    return(
    <div class={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>)
}

export default Container;