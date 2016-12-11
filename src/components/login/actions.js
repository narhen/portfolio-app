import { getUserInfo } from '../../utils/api';
import { setAuthenticated, setSessionToken, setUserInfo } from '../actions';

export function initializeSession(sessionToken) {
  return dispatch => getUserInfo(sessionToken)
  .then(user => [
    setAuthenticated(true),
    setSessionToken(sessionToken),
    setUserInfo(user),
  ].map(dispatch))
  .catch(error => console.log(error));
}
