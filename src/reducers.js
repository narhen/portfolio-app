import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import summary from './containers/summaryReducers';
import portfolio from './containers/portfolio/portfolioReducers';
import sessiontoken from './components/login/reducers';

const rootReducers = combineReducers({
  summary,
  portfolio,
  sessiontoken,
  routing: routerReducer,
});

export default rootReducers;
