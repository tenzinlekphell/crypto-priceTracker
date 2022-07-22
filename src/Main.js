import React from 'react';
import PriceTracker from './PriceTracker';

const Main = () => {
  return (
    <div>
      <div className="logoAndtitle">
        <h1 id="logo-header"> Crypto Price Tracker</h1>
      </div>
      <PriceTracker />
    </div>
  );
};

export default Main;
