import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginPage, ProtectedRoute, RegisterPage } from '@app/features/auth';
import { DashboardPage } from '@app/features/dashboard';

function Routes() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path='/'>
          <DashboardPage />
        </ProtectedRoute>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
