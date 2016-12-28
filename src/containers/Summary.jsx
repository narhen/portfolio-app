import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { calculateWeight } from '../utils/metrics';

const Summary = ({ summary }) => {
  const weights = calculateWeight(summary);
  const getWeightForTicker = (ticker) => {
    const weight = weights.find(x => x.ticker === ticker);
    if (weight) {
      return weight.weight;
    }
    return 0;
  };
  const calculateReturn = (value, deposited) => {
    if (value > 0 && deposited > 0) {
      return (((value / deposited) - 1) * 100);
    }
    return 0;
  };

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
          const value = data.development.length > 0 ? data.development[data.development.length - 1].value : 0;
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
