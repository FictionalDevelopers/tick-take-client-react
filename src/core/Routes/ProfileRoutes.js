import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import { Layout } from '@app/features/profile';
import { LotCreationPage, LotDetailsPage } from '@app/features/lots';

function ProfileRoutes() {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <Typography variant="h1">Profile dashboard</Typography>
        </Route>
        <Route exact path={`${path}/lots`}>
          <Typography variant="h1">Lots page</Typography>
        </Route>
        <Route path={`${path}/lots/new`}>
          <LotCreationPage />
        </Route>
        <Route path={`${path}/lots/:lotId`}>
          <LotDetailsPage />
        </Route>
        <Route path={`${path}/auctions`}>
          <Typography variant="h1">Auctions page</Typography>
        </Route>
        <Route path={`${path}/info`}>
          <Typography variant="h1">Profile info page</Typography>
        </Route>
        <Route path={`${path}/security`}>
          <Typography variant="h1">Profile security page</Typography>
        </Route>
      </Switch>
    </Layout>
  );
}

export default ProfileRoutes;
