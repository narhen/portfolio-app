import { deposit } from '../../utils/api';
import { fetchSummaryData } from '../../containers/summaryActions';

export function makeDeposit(body) {
  return (dispatch, getState) => deposit(getState().sessiontoken, body)
  .then(() => dispatch(fetchSummaryData()))
  .catch(error => console.log(error));
}
