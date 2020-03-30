import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import { reducer as authReducer } from './auth';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});
