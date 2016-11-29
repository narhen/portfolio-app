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
        {summary.map(data => <tr key={data.ticker}>
          <td>{data.ticker}</td>
          <td>{data.value.toFixed(0)}</td>
          <td>{data.deposited}</td>
          <td>{(((data.value / data.deposited) - 1) * 100).toFixed(1)} %</td>
        </tr>
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
