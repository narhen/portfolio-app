import { createAction } from 'redux-actions';
import { getSummary, addFondApi } from '../utils/api';

const setPortfolioData = createAction('SET_SUMMARY_DATA');

export function fetchSummaryData() {
  return (dispatch, getState) => getSummary(getState().sessiontoken)
  .then(data => dispatch(setPortfolioData(data)))
  .catch(err => console.log(err));
}

export function addFond(data) {
  return (dispatch, getState) => addFondApi(getState().sessiontoken, data)
  .then(() => dispatch(fetchSummaryData()))
  .catch(err => console.log(err));
}
