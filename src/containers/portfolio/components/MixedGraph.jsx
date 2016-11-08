import React, { PropTypes } from 'react';
import { Bar } from 'react-chartjs-2';

export const MixedGraph = ({ ...props }) => {
  const { lineValues, barValues, dates, lineLabel, barLabel } = props;

  const graphData = {
    labels: dates,
    datasets: [{
      type: 'line',
      data: lineValues,
      label: lineLabel,
      borderColor: 'rgba(102, 102, 102, 1)',
      pointBackgroundColor: '#fff',
      pointHoverRadius: 5,
      pointHitRadius: 20,
      lineTension: 0.0,
      yAxisID: 'y-axis-1',
    }, {
      type: 'bar',
      data: barValues,
      label: barLabel,
      backgroundColor: 'rgba(0, 95, 95, 0.2)',
      yAxisID: 'y-axis-2',
    }],
  };

  const options = {
    response: true,
    tooltips: {
      mode: 'label',
    },
    elements: {
      line: {
        fill: false,
      },
    },
    bodyFontColor: '#000',
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      }],
      yAxes: [{
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: true,
        },
        labels: {
          show: true,
        },
      }, {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      }],
    },
  };

  return <Bar data={graphData} options={options} />;
};

MixedGraph.propTypes = {
  lineValues: PropTypes.array.isRequired,
  barValues: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
  lineLabel: PropTypes.string.isRequired,
  barLabel: PropTypes.string.isRequired,
};
