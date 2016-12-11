import { createAction } from 'redux-actions';
import { getSummary } from '../utils/api';

const setPortfolioData = createAction('SET_SUMMARY_DATA');

export function fetchSummaryData() {
  return (dispatch, getState) => getSummary(getState().sessiontoken)
  .then(data => dispatch(setPortfolioData(data)))
  .catch(err => console.log(err));
}
