import { createReducer } from '@reduxjs/toolkit';
import { lotListRetrievalSucceeded } from '../actions';

const initialState = [];

export default createReducer(initialState, {
  [lotListRetrievalSucceeded]: (state, { payload: { items } }) => {
    return items;
  },
});
