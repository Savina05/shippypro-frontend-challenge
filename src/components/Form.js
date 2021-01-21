import React from 'react';
import { connect } from 'react-redux';

import { setArrival, setDeparture } from '../redux/actions';

import '../assets/styles/components/Form.scss';

let Search = ({ dispatch }) => {
  return (
    <div className="search">
      <h5 className="header">Prenota subito un volo per la tua spedizione.</h5>
      <div className="search_row">
        <span className="text">Aereoporto di partenza</span>
        <input
          className="search_input"
          placeholder="Codice IATA"
          onChange={(e) => dispatch(setDeparture(e.target.value))}
        />
      </div>
      <div className="search_row">
        <span className="text">Aereoporto di destinazione</span>
        <input
          className="search_input"
          placeholder="Codice IATA"
          onChange={(e) => dispatch(setArrival(e.target.value))}
        />
      </div>
    </div>
  );
};

Search = connect()(Search);

export default Search;
