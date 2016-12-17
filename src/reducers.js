import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import summary from './containers/summaryReducers';
import sessiontoken from './components/sessionTokenReducer';
import authenticated from './components/authenticatedReducer';
import user from './components/userReducer';

const rootReducers = combineReducers({
  summary,
  sessiontoken,
  authenticated,
  routing: routerReducer,
  user,
  form: formReducer,
});

export default rootReducers;
