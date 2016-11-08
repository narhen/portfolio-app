import { handleActions } from 'redux-actions';

export default handleActions({
  SET_PORTFOLIO_DATA: {
    next(state, action) {
      return action.payload;
    },
  },
}, {});
