import React from 'react';
import { connect, useSelector } from 'react-redux';

import Logo from '../components/Logo';
import Form from '../components/Form';
import Button from '../components/Button';
import Flight from '../components/Flight';

let Search = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const availableFlights = useSelector((state) => state.availableFlights);

  const renderAvailableFlights = isLoading ? (
    <h3>Stiamo cercando i voli disponibili</h3>
  ) : availableFlights.length > 0 ? (
    availableFlights.map((flight) => (
      <div className="container_flights">
        {availableFlights.map}
        <Flight
          key={flight.id}
          airline={flight.airline.name}
          departure={flight.departureAirport.codeIata}
          arrival={flight.arrivalAirport.codeIata}
          price={flight.price}
        />
      </div>
    ))
  ) : (
    <h3>Nessun volo trovato</h3>
  );

  return (
    <div className="container">
      <Logo />
      <Form />
      <Button />
      {renderAvailableFlights}
    </div>
  );
};

Search = connect()(Search);

export default Search;
