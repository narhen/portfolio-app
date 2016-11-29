import fetch from 'isomorphic-fetch';
import { apiUrl } from '../config';

export const getSummary = () =>
fetch(`${apiUrl}/user/17/summary`)
.then((response) => {
  if (response.status >= 400) {
    throw new Error('Bad response from server!');
  }
  return response.json();
});
