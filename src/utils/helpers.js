import fetch from 'isomorphic-fetch';
import { apiUrl } from '../config';

const applicationUrl = document.location.origin;

export const applicationResourceUrl = path => applicationUrl + path;
export const apiResourceUrl = path => apiUrl + path;

function resolveJsonOrRejectWithError(res) {
  return new Promise((resolve, reject) => {
    if (res.ok) {
      return res.status === 204 ? resolve() : resolve(res.json());
    }
    return reject();
  });
}

export function fetchAuthorized(path) {
  const url = apiResourceUrl(path);
  return sessionToken => fetch(url, {
    headers: { 'api-key': sessionToken },
    method: 'GET',
  }).then(resolveJsonOrRejectWithError);
}

export function putAuthorized(path) {
  const url = apiResourceUrl(path);
  return (sessionToken, body) => fetch(url, {
    headers: { 'api-key': sessionToken, 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(body),
  }).then(resolveJsonOrRejectWithError);
}
