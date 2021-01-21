const api = 'https://recruitment.shippypro.com/flight-engine/api';

export const fetchApi = async (url) => {
  return fetch(url, {
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj',
    },
  })
    .then((response) => response.json())
    .then((data) => data.data);
};

export const fetchAllFlights = async () => {
  const flights = await fetchApi(`${api}/flights/all`);
  return flights;
};

export const fetchAllAirports = async () => {
  const airports = await fetchApi(`${api}/airports/all`);
  return airports;
};

export const fetchAllAirlines = async () => {
  const airlines = await fetchApi(`${api}/airlines/all`);
  return airlines;
};
