import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { calculateWeight } from '../utils/metrics';

const Summary = ({ summary }) => {
  const weights = calculateWeight(summary);
  const getWeightForTicker = ticker => weights.find(x => x.ticker === ticker).weight;
  const calculateReturn = (value, deposited) => (((value / deposited) - 1) * 100);

  return (<div className="summaryTable">
    <h1>Summary</h1>
    <Table responsive >
      <tbody>
        <tr>
          <th>Ticker</th>
          <th>Value</th>
          <th>Invested</th>
          <th>Return</th>
          <th>Weight</th>
        </tr>
        {summary.map((data, i) => {
          const value = data.development[data.development.length - 1].value;
          return (<tr key={i}>
            <td>{data.ticker}</td>
            <td>{value.toFixed(0)}</td>
            <td>{data.total_deposited}</td>
            <td>{calculateReturn(value, data.total_deposited).toFixed(1)} %</td>
            <td>{getWeightForTicker(data.ticker).toFixed(1)} %</td>
          </tr>);
        }
    )}
      </tbody>
    </Table>
  </div>);
};

Summary.propTypes = {
  summary: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => Object.assign({}, state, {
  summary: state.summary,
});

export default connect(mapStateToProps)(Summary);
