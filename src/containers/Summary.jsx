import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

const Summary = ({ summary }) =>
  <div className="summaryTable">
    <Table responsive >
      <tbody>
        <tr>
          <th>Ticker</th>
          <th>Value</th>
          <th>Invested</th>
          <th>Return</th>
        </tr>
        {summary.map((data, i) => {
          const value = data.development[data.development.length - 1].value;
          return (<tr key={i}>
            <td>{data.ticker}</td>
            <td>{value.toFixed(0)}</td>
            <td>{data.total_deposited}</td>
            <td>{(((value / data.total_deposited) - 1) * 100).toFixed(1)} %</td>
          </tr>);
        }
    )}
      </tbody>
    </Table>
  </div>;

Summary.propTypes = {
  summary: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => Object.assign({}, state, {
  summary: state.summary,
});

export default connect(mapStateToProps)(Summary);
