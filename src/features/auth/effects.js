import { batch } from 'react-redux';
import { apiClient, storage } from '@app/common/utils';

import {
  currentUserFetchFailed,
  currentUserFetchSucceeded,
  loggedOut,
  loginFailed,
  loginSucceeded,
  registrationFailed,
  registrationSucceeded,
  tokenFound,
  tokenNotFound,
} from './actions';

import { selectToken } from './selectors';

import { TOKEN_STORAGE_KEY } from './constants';

export function login({ email, password }) {
  return async dispatch => {
    try {
      const { data: { token, user } } = await apiClient.post('/auth/login', {
        email,
        password,
      });

      storage.setItem(TOKEN_STORAGE_KEY, token);

      return dispatch(loginSucceeded({ token, user }));
    } catch (error) {
      const payload = error.response ? error.response.data : { error: error.message };

      dispatch(loginFailed(payload));

      throw payload;
    }
  };
}

export function register({ name, email, password, passwordConfirm }) {
  return async dispatch => {
    try {
      const { data: { token, user } } = await apiClient.post('/auth/register', {
        name,
        email,
        password,
        passwordConfirm,
      });

      storage.setItem(TOKEN_STORAGE_KEY, token);

      return dispatch(registrationSucceeded({ token, user }));
    } catch (error) {
      const payload = error.response ? error.response.data : { error: error.message };

      dispatch(registrationFailed(payload));

      throw payload;
    }
  };
}

export function getCurrentUser() {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());

      const { data: user } = await apiClient.get('/auth/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return dispatch(currentUserFetchSucceeded({ user }));
    } catch (error) {
      const payload = error.response ? error.response.data : { error: error.message };

      return dispatch(currentUserFetchFailed(payload));
    }
  };
}

export function checkToken() {
  return dispatch => {
    const token = storage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
      return batch(() => {
        dispatch(tokenFound({ token }));
        dispatch(getCurrentUser());
      });
    }

    return dispatch(tokenNotFound({}));
  };
}

export function logout() {
  return dispatch => {
    storage.removeItem(TOKEN_STORAGE_KEY);

    return dispatch(loggedOut({}));
  };
}
