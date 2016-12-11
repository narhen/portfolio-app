import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import summary from './containers/summaryReducers';
import portfolio from './containers/portfolio/portfolioReducers';
import sessiontoken from './components/sessionTokenReducer';
import authenticated from './components/authenticatedReducer';
import user from './components/userReducer';

const rootReducers = combineReducers({
  summary,
  portfolio,
  sessiontoken,
  authenticated,
  routing: routerReducer,
  user,
});

export default rootReducers;
