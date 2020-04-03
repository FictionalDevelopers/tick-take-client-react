import { combineReducers } from '@reduxjs/toolkit';

import lotDetailsReducer from './lotDetailsReducer';

export default combineReducers({
  lotDetails: lotDetailsReducer,
});
