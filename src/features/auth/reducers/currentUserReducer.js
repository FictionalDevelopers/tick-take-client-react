import { createReducer } from '@reduxjs/toolkit';

import { currentUserFetchSucceeded, loggedOut, loginSucceeded, registrationSucceeded } from '../actions';

const initialState = {};

const setUser = (state, { payload }) => {
  return payload.user;
};

export default createReducer(initialState, {
  [loginSucceeded]: setUser,
  [registrationSucceeded]: setUser,
  [currentUserFetchSucceeded]: setUser,
  [loggedOut]: () => ({}),
});
