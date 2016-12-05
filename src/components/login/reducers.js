import { handleActions } from 'redux-actions';

export default handleActions({
  SET_SESSION_TOKEN: {
    next: (state, action) => action.payload,
  },
}, '');
