import React from "react";
import "./nav.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./Vector.png"

export default class NAVBAR extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav_bar" style={{ backgroundColor: "white" }}>
            <div className="heading">
            <img src={logo}/>
              <h3>ISOMANIA</h3>
            </div>
            <ul>
              <li>
                <Link to="/">
                  <span className="links">Home </span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="links">Calender </span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <span className="links"> Deshboard </span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <span className="links"> Deshboard </span>{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    );
  }
}
