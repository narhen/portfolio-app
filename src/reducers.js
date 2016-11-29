import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import portfolio from './containers/portfolio/portfolioReducers';
import summary from './containers/summaryReducers';

const rootReducers = combineReducers({
  portfolio,
  summary,
  routing: routerReducer,
});

export default rootReducers;
