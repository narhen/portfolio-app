import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { groupDepositsByDate } from '../utils/metrics';

const Deposits = ({ summary }) => {
  const deposits = groupDepositsByDate(summary);
  if (deposits.length < 1) {
    return null;
  }

  const headers = deposits[0].deposits.map(x => x.ticker);

  return (
    <div className="summaryTable">
      <h1>Deposits</h1>
      <Table responsive>
        <thead><tr key="headers"><th>Date</th>{headers.map(x => <th key={x}>{x}</th>)}</tr></thead>
        <tbody>
          {deposits.map((row) => {
            const cells = row.deposits.map(cell => <td key={cell.ticker}>{cell.deposit}</td>);
            return (<tr key={row.date}><td>{row.date}</td>{cells}</tr>);
          })}
        </tbody>
      </Table>
    </div>);
};

Deposits.propTypes = {
  summary: PropTypes.array.isRequired,
};

const mapStateToProps = state => Object.assign({}, state, {
  summary: state.summary,
});

export default connect(mapStateToProps)(Deposits);
