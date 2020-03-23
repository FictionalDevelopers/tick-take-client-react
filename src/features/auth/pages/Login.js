import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../effects';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <button
        onClick={async () => {
          await dispatch(login({ email: 'dimas4@dimas.com', password: '123' }));
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
