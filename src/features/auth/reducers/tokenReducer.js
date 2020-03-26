import { createReducer } from '@reduxjs/toolkit';

import {
  currentUserFetchFailed,
  loggedOut,
  loginSucceeded,
  registrationSucceeded,
  tokenFound,
} from '../actions';

const initialState = null;

const setToken = (state, { payload }) => {
  return payload.token;
};

export default createReducer(initialState, {
  [registrationSucceeded]: setToken,
  [loginSucceeded]: setToken,
  [tokenFound]: setToken,
  [currentUserFetchFailed]: () => null,
  [loggedOut]: () => null,
});
