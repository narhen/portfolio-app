import React, { PropTypes } from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';

const Highchart = ({ title, subtitle, investments, unit }) => {
  const config = {
    rangeSelector: {
      selected: 1,
    },
    yAxis: {
      labels: {
        formatter() {
          return `${this.value} ${unit}`;
        },
      },
    },
    title: {
      text: title,
    },
    subtitle: {
      text: subtitle,
    },
    tooltip: {
      valueDecimals: 2,
    },
    series: investments,
  };

  return <ReactHighstock config={config} />;
};

Highchart.propTypes = {
  title: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  investments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  }).isRequired).isRequired,
};

export default Highchart;
