import React from 'react';

import AuthPage from '../components/AuthPage';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <AuthPage title="Sign up">
      <RegisterForm />
    </AuthPage>
  );
}
