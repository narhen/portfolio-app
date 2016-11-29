import { createAction } from 'redux-actions';
import { getSummary } from './summaryApi';

const setPortfolioData = createAction('SET_SUMMARY_DATA');

export function fetchSummaryData() {
  return dispatch => getSummary()
  .then(data => dispatch(setPortfolioData(data)))
  .catch(err => console.log(err));
}
