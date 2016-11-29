import React from 'react';
import { bindActionCreators } from 'redux';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import NoMatch from './components/NoMatch';
import configurePortfolioRoutes from './containers/portfolio/routes';
import * as summaryActions from './containers/summaryActions';
import Summary from './containers/Summary';

export default function (store) {
  const portfolioRoutes = configurePortfolioRoutes(store);
  const { fetchSummaryData } = bindActionCreators(summaryActions, store.dispatch);
  return (
    <Route path="/" component={App}>
      <IndexRoute onEnter={fetchSummaryData} component={Summary} />
      {portfolioRoutes}
      <Route path="*" status={404} component={NoMatch} />
    </Route>
  );
}
