import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { Layout } from '@app/features/profile';

function ProfileRoutes() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Layout>
        <Route exact path={path}>
          <h1>Profile dashboard</h1>
        </Route>
        <Route path={`${path}/lots`}>
          <h1>Lots page</h1>
        </Route>
      </Layout>
    </Switch>
  );
}

export default ProfileRoutes;
