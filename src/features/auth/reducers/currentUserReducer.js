import { createReducer } from '@reduxjs/toolkit';

import { loginSuccessed } from '../actions';

const initialState = {};

export default createReducer(initialState, {
  [loginSuccessed]: (state, { payload }) => {
    state.id = payload.id;
  },
});
