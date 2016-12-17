import { depositApi, deleteDepositApi } from '../../utils/api';
import { fetchSummaryData } from '../../containers/summaryActions';

export function makeDeposit(body) {
  return (dispatch, getState) => depositApi(getState().sessiontoken, body)
  .then(() => dispatch(fetchSummaryData()))
  .catch(error => console.log(error));
}

export function deleteDeposit(body) {
  return (dispatch, getState) => deleteDepositApi(getState().sessiontoken, body)
  .then(() => dispatch(fetchSummaryData()))
  .catch(error => console.log(error));
}
