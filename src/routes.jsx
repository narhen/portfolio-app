import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import NoMatch from './components/NoMatch';
import WelcomePage from './components/WelcomePage';
import configurePortfolioRoutes from './containers/portfolio/routes';

export default function (store) {
  const portfolioRoutes = configurePortfolioRoutes(store);
  return (
    <Route path="/" component={App}>
      <IndexRoute component={WelcomePage} />
      {portfolioRoutes}
      <Route path="*" status={404} component={NoMatch} />
    </Route>
  );
}
