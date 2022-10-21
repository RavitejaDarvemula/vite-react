import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import logo2 from "./images/react-logo.png";

function Header() {
  return (
    <header class="main">
      <nav className="nav">
        <img className="nav-logo" src={logo2} alt="" />
        <ul className="nav-items">
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ul>
        <li>
          <b>I like front end development</b>
        </li>
        <li>
          <b>I like to design things</b>
        </li>
        <li>
          <b>React is after JavaScript</b>
        </li>
      </ul>
    </div>
  );
}
function Footer() {
  return (
    <small className="Footer">
      © 2021 sunshine development. All rights reserved.
    </small>
  );
}
function App() {
  return (
    <div>
      {" "}
      <Header /> <MainContent /> <Footer />
    </div>
  );
}

export default App;
