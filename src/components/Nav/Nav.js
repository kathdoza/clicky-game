import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="/">
    <img src="https://img.pngio.com/discoverthespiderversecom-spiderman-into-the-spiderverse-png-1288_588.png" class="logo" alt="logo"></img></a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav scores">
        <li>Current Score: {props.score}  </li>
        <li>Top Score: {props.topScore}</li>
      </ul>
    </div>
  </nav>
);

export default Nav; 