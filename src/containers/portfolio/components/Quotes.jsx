import React, { PropTypes } from 'react';
import { MixedGraph } from './MixedGraph';

const Quotes = ({ quotes }) => {
  const graphs = quotes.map((x) => {
    const lineValues = x.development.map(currentDay => currentDay.monetary.toFixed(1));
    const barValues = x.development.map(currentDay => currentDay.percent.toFixed(2));
    const dates = x.development.map(currentDay => currentDay.date);

    return (<div key={x.name} className={'graph'}>
      <h4>{x.name}</h4>
      <MixedGraph lineValues={lineValues} lineLabel={'Monetary'} barValues={barValues} barLabel={'Percent'} dates={dates} />
    </div>);
  });

  return <div>{graphs}</div>;
};

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired,
};

export default Quotes;
