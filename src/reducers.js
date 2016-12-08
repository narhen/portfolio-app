import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import summary from './containers/summaryReducers';
import portfolio from './containers/portfolio/portfolioReducers';
import sessiontoken from './components/login/sessionTokenReducer';
import authenticated from './components/login/authenticatedReducer';

const rootReducers = combineReducers({
  summary,
  portfolio,
  sessiontoken,
  authenticated,
  routing: routerReducer,
});

export default rootReducers;
