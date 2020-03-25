import { apiClient, storage } from '@app/common/utils';

import { loggedOut, loginFailed, loginSucceeded, tokenFound, tokenNotFound } from './actions';

import { TOKEN_STORAGE_KEY } from './constants';

export function login({ email, password }) {
  return async dispatch => {
    try {
      const { data: token } = await apiClient.post('/auth/login', {
        email,
        password,
      });

      storage.setItem(TOKEN_STORAGE_KEY, token);

      return dispatch(loginSucceeded({ token }));
    } catch (error) {
      const payload = error.response ? error.response.data : { error: error.message };

      dispatch(loginFailed(payload));

      throw payload;
    }
  };
}

export function checkToken() {
  return dispatch => {
    const token = storage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
      return dispatch(tokenFound({ token }));
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
