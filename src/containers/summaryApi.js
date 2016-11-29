import fetch from 'isomorphic-fetch';

export const getSummary = () =>
fetch('http://10.0.0.1:5000/user/17/summary')
.then((response) => {
  if (response.status >= 400) {
    throw new Error('Bad response from server!');
  }
  return response.json();
});
