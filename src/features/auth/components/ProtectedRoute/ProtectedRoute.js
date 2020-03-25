import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useIsAuthorized } from '../../hooks';

function ProtectedRoute({ children, ...rest }) {
  const isAuthorized = useIsAuthorized();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isAuthorized) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          );
        }

        return children;
      }}
    />
  );
}

export default ProtectedRoute;
