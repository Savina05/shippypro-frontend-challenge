import {
  FIND_ALL_FLIGHTS,
  SET_ALL_FLIGHTS,
  FIND_AVAILABLE_FLIGHTS,
  DEPARTURE,
  ARRIVAL,
  ERROR_MESSAGE,
} from './types';

export const findAllFlights = () => {
  return {
    type: FIND_ALL_FLIGHTS,
  };
};

export const setAllFlights = (flights) => {
  return {
    type: SET_ALL_FLIGHTS,
    payload: flights,
  };
};

export const setDeparture = (airport) => {
  return {
    type: DEPARTURE,
    payload: airport,
  };
};

export const setArrival = (airport) => {
  return {
    type: ARRIVAL,
    payload: airport,
  };
};

export const findAvailableFlights = (departure, arrival) => {
  return {
    type: FIND_AVAILABLE_FLIGHTS,
    payload: [departure, arrival],
  };
};

export const errorMessage = (message) => {
  return {
    type: ERROR_MESSAGE,
    payload: message,
  };
};
