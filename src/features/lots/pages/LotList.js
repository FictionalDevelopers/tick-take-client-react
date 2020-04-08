import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useRouteGetParams } from '@app/common/hooks';
import { EmptyResourceBox } from '@app/common/components';

import { useCurrentUser } from '@app/features/auth/hooks';

import { Layout, LotTable } from '../components';
import { useLotList, useLotListMeta } from '../hooks';

export default function LotList() {
  const { limit, currentPage, count, isFetching } = useLotListMeta();
  const currentUser = useCurrentUser();
  const { status } = useRouteGetParams();
  const lots = useLotList({
    user: currentUser.id,
    page: currentPage,
    status,
    limit,
  });

  if (!currentUser || isFetching) {
    return (
      <Layout title="Lots">
        <EmptyResourceBox header={<CircularProgress />} />
      </Layout>
    );
  }

  return (
    <Layout title="Lots">
      {lots.length === 0 ? (
        <EmptyResourceBox
          header="Looks like you don’t have any Lots yet."
          subheader="Fortunately, it’s very easy to create one."
          action={
            <Button
              size="large"
              to="/profile/lots/new"
              component={Link}
              color="primary"
              variant="contained"
            >
              Create Lot
            </Button>
          }
        />
      ) : (
        <LotTable
          lots={lots}
          limit={limit}
          count={count}
          currentPage={currentPage}
        />
      )}
    </Layout>
  );
}
