import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loginSuccessed } from '../actions';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(loginSuccessed({ id: 1 }));
          history.push('/');
        }}
      >
        Login
      </button>
      <h1>Login</h1>
    </div>
  );
}

export default Login;
