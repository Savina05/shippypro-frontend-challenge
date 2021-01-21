import React, { useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { findAvailableFlights } from '../redux/actions';

import '../assets/styles/components/Button.scss';

let Button = () => {
  const arrival = useSelector((state) => state.arrival);
  const departure = useSelector((state) => state.departure);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (e) => {
      dispatch(findAvailableFlights(departure, arrival));
    },
    [dispatch, arrival, departure]
  );

  return (
    <button onClick={handleClick} href="/results" className="button">
      Cerca
    </button>
  );
};

Button = connect()(Button);

export default Button;
