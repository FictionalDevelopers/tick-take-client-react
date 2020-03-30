import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoginPage, ProtectedRoute, RegisterPage } from '@app/features/auth';
import { DashboardPage } from '@app/features/dashboard';

import ProfileRoutes from './ProfileRoutes';

function Routes() {
  return (
    <Switch>
      <ProtectedRoute exact path='/'>
        <DashboardPage />
      </ProtectedRoute>
      <ProtectedRoute path='/profile'>
        <ProfileRoutes />
      </ProtectedRoute>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/register'>
        <RegisterPage />
      </Route>
    </Switch>
  );
}

export default Routes;
