import { combineReducers } from 'redux';

import currentUserReducer from './currentUserReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  currentUser: currentUserReducer,
  token: tokenReducer,
});
