import React from 'react';

import AuthPage from '../components/AuthPage';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <AuthPage title="Sign in">
      <LoginForm />
    </AuthPage>
  );
}
