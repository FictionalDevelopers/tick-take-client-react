import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { selectIsAuthorized } from '../../selectors';

function ProtectedRoute({ children, ...rest }) {
  const isAuthorized = useSelector(selectIsAuthorized);

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
