import {
  DEPARTURE,
  ARRIVAL,
  SET_ALL_FLIGHTS,
  FIND_AVAILABLE_FLIGHTS,
} from './types';

const initialState = {
  departure: '',
  arrival: '',
  allFlights: [],
  availableFlights: [],
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_ALL_FLIGHTS:
      return { ...state, allFlights: [...state.allFlights, payload] };
    case FIND_AVAILABLE_FLIGHTS:
      return {
        ...state,
        availableFlights: state.allFlights[0].filter((flight) => {
          return (
            flight.departureAirport.codeIata === payload[0].toUpperCase() &&
            flight.arrivalAirport.codeIata === payload[1].toUpperCase()
          );
        }),
      };
    case DEPARTURE:
      return { ...state, departure: payload };
    case ARRIVAL:
      return { ...state, arrival: payload };
    default:
      return state;
  }
};

export default reducer;
