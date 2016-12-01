import React from 'react';
import { bindActionCreators } from 'redux';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import NoMatch from './components/NoMatch';
import * as summaryActions from './containers/summaryActions';
import Summary from './containers/Summary';
import Portfolio from './containers/portfolio/Portfolio';
import Deposits from './components/Deposits';

export default function (store) {
  const { fetchSummaryData } = bindActionCreators(summaryActions, store.dispatch);
  return (
    <Route path="/" onEnter={fetchSummaryData} component={App}>
      <IndexRoute component={Summary} />
      <Route path="/portfolio(/)" component={Portfolio} />
      <Route path="/deposits(/)" component={Deposits} />
      <Route path="*" status={404} component={NoMatch} />
    </Route>
  );
}
