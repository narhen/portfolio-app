import React, { PropTypes } from 'react';
import { Line } from 'react-chartjs-2';

export const Graph = ({ ...props }) => {
  const { values, dates, label } = props;

  const graphData = {
    labels: dates,
    datasets: [{
      data: values,
      label,
      borderColor: 'rgba(102, 102, 102, 1)',
      backgroundColor: 'rgba(0, 95, 95, 0.2)',
      pointBackgroundColor: '#fff',
      pointHoverRadius: 5,
      pointHitRadius: 20,
      lineTension: 0.1,
    }],
  };

  const options = {
    bodyFontColor: '#000',
  };

  return <Line data={graphData} options={options} />;
};

Graph.propTypes = {
  values: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};
