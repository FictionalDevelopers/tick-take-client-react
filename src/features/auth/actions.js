import { createAction } from '@reduxjs/toolkit';

const MODULE = 'AUTH';

export const tokenFound = createAction(`${MODULE}/TOKEN_FOUND`);
export const tokenNotFound = createAction(`${MODULE}/TOKEN_NOT_FOUND`);

export const loginSucceeded = createAction(`${MODULE}/LOGIN_SUCCEEDED`);
export const loginFailed = createAction(`${MODULE}/LOGIN_FAILED`);

export const registrationSucceeded = createAction(`${MODULE}/REGISTRATION_SUCCEEDED`);
export const registrationFailed = createAction(`${MODULE}/REGISTRATION_FAILED`);

export const currentUserFetchSucceeded = createAction(`${MODULE}/CURRENT_USER_FETCH_SUCCEEDED`);
export const currentUserFetchFailed = createAction(`${MODULE}/CURRENT_USER_FETCH_FAILED`);

export const loggedOut = createAction(`${MODULE}/LOGGED_OUT`);
