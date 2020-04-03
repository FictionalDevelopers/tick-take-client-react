import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as authReducer } from './auth';
import { reducer as lotsReducer } from './lots';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  lots: lotsReducer,
});
