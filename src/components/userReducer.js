import { handleActions } from 'redux-actions';

export default handleActions({
  SET_USER_INFO: {
    next: (state, action) => action.payload,
  },
}, {});
