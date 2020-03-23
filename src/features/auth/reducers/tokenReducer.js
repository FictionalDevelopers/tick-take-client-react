import { createReducer,  } from '@reduxjs/toolkit';

import { loginSucceeded, tokenFound, loggedOut } from '../actions';

const initialState = null;

const setToken = (state, { payload }) => {
  return payload.token;
};

export default createReducer(initialState, {
  [loginSucceeded]: setToken,
  [tokenFound]: setToken,
  [loggedOut]: (state) => {
    return null;
  },
});
