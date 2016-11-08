import React from 'react';
import { bindActionCreators } from 'redux';
import { Route, IndexRoute } from 'react-router';

import Portfolio from './Portfolio';
import * as portfolioActions from './portfolioActions';

export default function (store) {
  const { fetchPortfolioData } = bindActionCreators(portfolioActions, store.dispatch);

  return (
    <Route path="portfolio(/)">
      <IndexRoute
        component={Portfolio}
        onEnter={fetchPortfolioData}
      />
    </Route>
  );
}
