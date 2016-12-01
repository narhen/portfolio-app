import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import summary from './containers/summaryReducers';
import portfolio from './containers/portfolio/portfolioReducers';

const rootReducers = combineReducers({
  summary,
  portfolio,
  routing: routerReducer,
});

export default rootReducers;
