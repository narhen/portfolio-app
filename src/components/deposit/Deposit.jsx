import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { groupDepositsByDate } from '../../utils/metrics';
import AddDeposit from './AddDeposit';
import { makeDeposit } from './actions';

const Deposits = ({ summary, dispatch }) => {
  const deposits = groupDepositsByDate(summary);
  if (deposits.length < 1) {
    return null;
  }

  const tickers = deposits[0].deposits.map(x => x.ticker);
  const tickerHeaders = tickers.map((ticker, i) => <th key={i}>{ticker}</th>);
  const rows = deposits.map((row, i) => {
    const cells = row.deposits.map(cell => <td key={cell.ticker}>{cell.deposit}</td>);
    return (<tr key={i}>
      <td>{row.date}</td>
      {cells}
    </tr>);
  });

  return (
    <div className="summaryTable">
      <h1>Deposits</h1>
      <AddDeposit tickers={tickers} onSubmit={data => dispatch(makeDeposit(data))} />
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
  summary: PropTypes.array.isRequired,
};

const mapStateToProps = state => Object.assign({}, state, {
  dispatch: state.dispatch,
  summary: state.summary,
});

export default connect(mapStateToProps)(Deposits);
