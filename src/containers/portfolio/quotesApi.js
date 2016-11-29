import fetch from 'isomorphic-fetch';
import { apiUrl } from '../../config';

export const getQuotes = () =>
fetch(`${apiUrl}/user/17/value`)
.then((response) => {
  if (response.status >= 400) {
    throw new Error('Bad response from server!');
  }
  return response.json();
});
