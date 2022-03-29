import React, { Component } from "react";
import hello from "./hello.svg";
import PriceTracker from "./PriceTracker";

export default class Home extends Component {
  render() {
    return (
      <div className="homepage-container">
        <div>
          <h1>Welcome to Crypto Price Tracker!</h1>
          <p>
            Click on our Price Tracker tab to get price data of cryptocurrencies
          </p>
        </div>
        <div>
          <img src={hello} className="hello-img"></img>
        </div>
      </div>
    );
  }
}
