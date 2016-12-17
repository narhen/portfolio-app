import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { keys } from 'lodash/object';
import { groupDepositsByDate } from '../../utils/metrics';
import AddDeposit from './AddDeposit';
import { makeDeposit, deleteDeposit } from './actions';

const Deposits = ({ deposits, dispatch }) => {
  if (deposits.length < 1) {
    return null;
  }

  const removeEmptyObjects = array => array.filter(entry => keys(entry).length > 0);
  const deleteRow = (date, tickersWithDeposits) =>
   () => dispatch(deleteDeposit({ date, tickers: tickersWithDeposits }));

  const tickers = deposits[0].deposits.map(x => x.ticker);
  const tickerHeaders = tickers.map((ticker, i) => <th key={i}>{ticker}</th>);
  const rows = deposits.map((row, i) => {
    const cells = row.deposits.map(cell => <td key={cell.ticker}>{cell.deposit}</td>);
    const tickersWithDeposits = row.deposits.reduce((array, current) => {
      if (current.deposit > 0) {
        return array.concat(current.ticker);
      }
      return array;
    }, []);

    return (<tr key={i}>
      <td>{row.date}</td>
      {cells}
      <td><button onClick={deleteRow(row.date, tickersWithDeposits)}>X</button></td>
    </tr>);
  });

  return (
    <div className="summaryTable">
      <h1>Deposits</h1>
      <AddDeposit tickers={tickers} onSubmit={data => dispatch(makeDeposit({ date: data.date, fonds: removeEmptyObjects(data.fonds) }))} />
      <Table responsive>
        <thead>
          <tr key="headers">
            <th>Date</th>
            {tickerHeaders}
            <th />
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </div>);
};

Deposits.propTypes = {
  dispatch: PropTypes.func.isRequired,
  deposits: PropTypes.array.isRequired,
};

const mapStateToProps = state => Object.assign({}, state, {
  dispatch: state.dispatch,
  deposits: groupDepositsByDate(state.summary),
});

export default connect(mapStateToProps)(Deposits);
