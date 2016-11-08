import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import portfolio from './containers/portfolio/portfolioReducers';

const rootReducers = combineReducers({
  portfolio,
  routing: routerReducer,
});

export default rootReducers;
