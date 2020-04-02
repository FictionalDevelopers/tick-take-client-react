import { createReducer } from '@reduxjs/toolkit';
import { lotRetrievalSucceeded } from '../actions';

const initialState = {};

export default createReducer(initialState, {
  [lotRetrievalSucceeded]: (state, { payload: lot }) => {
    return {
      ...state,
      [lot._id]: lot,
    };
  },
});
