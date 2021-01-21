import React from 'react';
import { connect, useSelector } from 'react-redux';

import Logo from '../components/Logo';
import Form from '../components/Form';
import Button from '../components/Button';
import Flight from '../components/Flight';

let Search = () => {
  const availableFlights = useSelector((state) => state.availableFlights);

  return (
    <div className="container">
      <Logo />
      <Form />
      <Button />
      <div className="container_flights">
        {availableFlights.length > 0 ? (
          availableFlights.map((flight) => (
            <Flight
              key={flight.id}
              airline={flight.airline.name}
              departure={flight.departureAirport.codeIata}
              arrival={flight.arrivalAirport.codeIata}
              price={flight.price}
            />
          ))
        ) : (
          <h3>Nessun volo trovato</h3>
        )}
      </div>
    </div>
  );
};

Search = connect()(Search);

export default Search;
