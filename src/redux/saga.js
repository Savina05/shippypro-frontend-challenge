import { put, call, all, takeLatest } from 'redux-saga/effects';
import { findAllFlights, setAllFlights, errorMessage } from '../redux/actions';

import { fetchAllFlights, fetchAllAirports, fetchAllAirlines } from './api';

function* getFlights() {
  try {
    const flights = yield call(fetchAllFlights);
    const airports = yield call(fetchAllAirports);
    const airlines = yield call(fetchAllAirlines);
    const flightsWithIataCode = flights.map((flight) => {
      const departure = airports.find(
        (airport) => airport.id === flight.departureAirportId
      );
      const arrival = airports.find(
        (airport) => airport.id === flight.arrivalAirportId
      );
      flight = {
        ...flight,
        departureAirport: departure,
        arrivalAirport: arrival,
      };
      return flight;
    });
    const flightsWithAirline = flightsWithIataCode.map((flight) => {
      const findAirline = airlines.find((a) => a.id === flight.airlineId);
      flight = { ...flight, airline: findAirline };
      return flight;
    });
    yield put(setAllFlights(flightsWithAirline));
  } catch (error) {
    yield put(errorMessage(error.message));
  }
}

export function* sagaWatchers() {
  yield takeLatest(findAllFlights, getFlights);
}

export default function* rootSaga() {
  yield all([getFlights()]);
}
