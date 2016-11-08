import fetch from 'isomorphic-fetch';

export const getQuotes = () =>
fetch('http://10.0.0.1:5000/value/monetary')
.then((response) => {
  if (response.status >= 400) {
    throw new Error('Bad response from server!');
  }
  return response.json();
});
