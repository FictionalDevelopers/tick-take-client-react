import { createReducer } from '@reduxjs/toolkit';

import { loginSucceeded, registrationSucceeded, loggedOut } from '../actions';

const initialState = {};

const setUser = (state, { payload }) => {
  return payload.user;
};

export default createReducer(initialState, {
  [loginSucceeded]: setUser,
  [registrationSucceeded]: setUser,
  [loggedOut]: () => ({}),
});
