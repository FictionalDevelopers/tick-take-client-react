import { combineReducers } from '@reduxjs/toolkit';

import lotDetailsReducer from './lotDetailsReducer';
import lotListReducer from './lotListReducer';
import lotListMetaReducer from './lotListMetaReducer';

export default combineReducers({
  lotDetails: lotDetailsReducer,
  lotList: lotListReducer,
  lotListMeta: lotListMetaReducer,
});
