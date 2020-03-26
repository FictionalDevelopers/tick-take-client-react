import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { Logo } from '@app/common/components';

import Section from './Section';
import SidebarLink from './SidebarLink';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles(props);
  let { url } = useRouteMatch();

  return (
    <Drawer
      open
      variant="persistent"
      anchor="left"
      classes={{ paper: classes.root }}
    >
      <div className={classes.logoSection}>
        <Logo />
      </div>
      <Section title="Navigate" classes={{ root: classes.section }}>
        <SidebarLink to={{ pathname: url }}>
          Profile
        </SidebarLink>
        <SidebarLink to={{ pathname: '/' }}>
          Browse
        </SidebarLink>
      </Section>
      <Section title="Lots" classes={{ root: classes.section }}>
        <SidebarLink to={{ pathname: `${url}/lots` }}>
          All
        </SidebarLink>
        <SidebarLink
          to={{
            pathname: `${url}/lots`,
            query: {
              status: 'in_sale',
            },
          }}
        >
          In sale
        </SidebarLink>
        <SidebarLink
          to={{
            pathname: `${url}/lots`,
            query: {
              status: 'sold',
            },
          }}
        >
          Sold
        </SidebarLink>
      </Section>
      <Section title="Auctions" classes={{ root: classes.section }}>
        <SidebarLink to={{ pathname: `${url}/auctions` }}>
          All
        </SidebarLink>
        <SidebarLink
          to={{
            pathname: `${url}/auctions`,
            query: {
              status: 'live',
            },
          }}
        >
          Live
        </SidebarLink>
        <SidebarLink
          to={{
            pathname: `${url}/auctions`,
            query: {
              status: 'ended',
            },
          }}
        >
          Ended
        </SidebarLink>
        <SidebarLink
          to={{
            pathname: `${url}/auctions`,
            query: {
              status: 'cancelled',
            },
          }}
        >
          Cancelled
        </SidebarLink>
      </Section>
      <Section title="Account" classes={{ root: classes.section }} defaultClosed>
        <SidebarLink to={{ pathname: `${url}/info` }}>
          Info
        </SidebarLink>
        <SidebarLink to={{ pathname: `${url}/security` }}>
          Security
        </SidebarLink>
      </Section>
    </Drawer>
  );
}
