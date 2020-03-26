import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';

import Sidebar from '../Sidebar';
import UserMenu from '../UserMenu';
import CreationMenu from '../CreationMenu';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="default" position="fixed" className={classes.header}>
        <CreationMenu />
        <Divider orientation="vertical" variant="middle" />
        <UserMenu />
      </AppBar>
      <Sidebar classes={{ root: classes.sidebar }} />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}
