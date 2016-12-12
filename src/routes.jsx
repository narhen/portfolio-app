import React from 'react';
import { bindActionCreators } from 'redux';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import NoMatch from './components/NoMatch';
import Portfolio from './containers/portfolio/Portfolio';
import Deposits from './components/Deposits';
import * as summaryActions from './containers/summaryActions';
import * as actions from './components/actions';
import Summary from './containers/Summary';
import { Login } from './components/login/Login';
import SessionInitializer from './components/login/SessionInitializer';
import Welcome from './components/Welcome';

export default function (store) {
  const { fetchSummaryData } = bindActionCreators(summaryActions, store.dispatch);
  const { logoutUser } = bindActionCreators(actions, store.dispatch);

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="/login(/)">
        <IndexRoute component={Login} />
        <Route path=":sessiontoken" component={SessionInitializer} />
      </Route>
      <Route path="logout" onEnter={logoutUser} component={Welcome} />
      <Route path="/portfolio(/)" onEnter={fetchSummaryData}>
        <IndexRoute component={Summary} />
        <Route path="history(/)" component={Portfolio} />
        <Route path="deposits(/)" component={Deposits} />
      </Route>
      <Route path="*" status={404} component={NoMatch} />
    </Route>
  );
}
