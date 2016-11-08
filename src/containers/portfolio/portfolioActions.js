import { createAction } from 'redux-actions';
import { getQuotes } from './quotesApi';

const setPortfolioData = createAction('SET_PORTFOLIO_DATA');

export function fetchPortfolioData() {
  return dispatch => getQuotes()
  .then(data => dispatch(setPortfolioData(data)))
  .catch(err => console.log(err));
}
