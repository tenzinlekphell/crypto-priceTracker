import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import books from "./books.svg";
import PriceTracker from "./PriceTracker";

class Main extends Component {
  render() {
    const closeBtn = document.getElementsByClassName("closeBtn");
    //closeBtn.addEventListener('click', (e) => {})
    return (
      <Router>
        <div>
          <div className="logoAndtitle">
            <h1 id="logo-header"> Crypto Price Tracker</h1>
            <img src={books} alt="" className="headerIcon" />
          </div>
          <ul className="header">
            <li>
              <NavLink to="/" activeStyle={{ color: "red" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricetracker">Price Tracker</NavLink>
            </li>
          </ul>

          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/pricetracker"
                element={<PriceTracker />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
