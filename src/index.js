import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

import './index.css';
import configureRoutes from './routes';
import reducers from './reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {
  summary: [],
  user: {},
  authenticated: false,
  sessiontoken: '',
}, composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory)), persistState(['sessiontoken', 'user', 'authenticated'], { key: 'portfolioapi' })));

const routes = configureRoutes(store);
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
), document.getElementById('root'));
