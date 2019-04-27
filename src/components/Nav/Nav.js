import React from "react";
import "./Nav.css";
const Nav = props => (
    <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="/">
    <img src="https://www.sonypictures-guilds.com/sites/sonypictures-guilds/files/styles/title_treatment/public/2018-11/1E24E790-9D44-4F6F-A3EB-72FC194D89DA.png?itok=yOpDekKz" alt="logo"></img></a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav scores">
        <li>Current Score: {props.score}  </li>
        <li>Top Score: {props.topScore}</li>
      </ul>
    </div>
  </nav>
);

export default Nav; 