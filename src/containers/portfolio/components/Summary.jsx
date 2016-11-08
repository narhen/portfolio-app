import React, { PropTypes } from 'react';
import { Graph } from './Graph';

const Summary = ({ quotes }) => {
  const graphs = quotes.map((x) => {
    const values = x.development.map(currentDay => currentDay.normalized.toFixed(2));
    const dates = x.development.map(currentDay => currentDay.date);

    return (<div key={x.name} className={'graph'}>
      <h4>{x.name}</h4>
      <Graph values={values} label={'Normalized'} dates={dates} />
    </div>);
  });

  return <div>{graphs}</div>;
};

Summary.propTypes = {
  quotes: PropTypes.array.isRequired,
};

export default Summary;
