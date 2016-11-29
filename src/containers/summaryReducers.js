import { handleActions } from 'redux-actions';

export default handleActions({
  SET_SUMMARY_DATA: {
    next(state, action) {
      return action.payload;
    },
  },
}, []);
