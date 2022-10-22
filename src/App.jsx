import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import logo2 from "./images/react-icon-small.png";
//Excerise -1
// function Header() {
//   return (
//     <header class="main">
//       <nav className="nav">
//         <img className="nav-logo" src={logo2} alt="" />
//         <ul className="nav-items">
//           <li>Home </li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
// function MainContent() {
//   return (
//     <div>
//       <h1>Reasons I'm excited to learn React</h1>
//       <ul>
//         <li>
//           <b>I like front end development</b>
//         </li>
//         <li>
//           <b>I like to design things</b>
//         </li>
//         <li>
//           <b>React is after JavaScript</b>
//         </li>
//       </ul>
//     </div>
//   );
// }
// function Footer() {
//   return (
//     <small className="Footer">
//       © 2021 sunshine development. All rights reserved.
//     </small>
//   );
// }
// function App() {
//   return (
//     <div>
//       {" "}
//       <Header /> <MainContent /> <Footer />
//     </div>
//   );
// }
function Navbar() {
  return (
    <nav>
      <img src={logo2} className="nav--logo" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React course-Project 1</h4>
    </nav>
  );
}
function Main() {
  return (
    <main>
      <h1 className="main-title">Fun facts about React</h1>
      <ul className="main-list">
        <li>
          <span> Was first released in 2013</span>
        </li>
        <li>
          <span>Was originally created by Jordan Walke</span>
        </li>
        <li>
          <span>Has well over 100k stars on GitHub</span>
        </li>
        <li>
          <span>Is maintained by Facebook</span>
        </li>
        <li>
          <span>Powers thousands of enterprise apps,including mobile apps</span>
        </li>
      </ul>
    </main>
  );
}
function App() {
  return (
    <div>
      <Navbar />;
      <Main />
    </div>
  );
}

export default App;
