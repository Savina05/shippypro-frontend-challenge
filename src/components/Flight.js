import React from 'react';

import '../assets/styles/components/Flight.scss';

const Flight = ({ airline, departure, arrival, price }) => {
  return (
    <div className="card">
      <h1>
        {departure.toUpperCase()} → {arrival.toUpperCase()}
      </h1>
      <h3>Operato da {airline}</h3>
      <p>€ {price}</p>
      <button>Prenota</button>
    </div>
  );
};

export default Flight;
