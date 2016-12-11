import { createAction } from 'redux-actions';
import { logout } from '../utils/api';

export const setSessionToken = createAction('SET_SESSION_TOKEN');
export const setAuthenticated = createAction('SET_AUTHENTICATED');
export const setUserInfo = createAction('SET_USER_INFO');

export function logoutUser() {
  return (dispatch, getState) => logout(getState().sessiontoken)
  .then(() => [
    setAuthenticated(false),
    setSessionToken(''),
    setUserInfo({}),
  ].map(dispatch))
  .catch(error => console.log(error));
}
