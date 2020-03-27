import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Sidebar from '../Sidebar';
import UserMenu from '../UserMenu';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="default" position="fixed" className={classes.header}>
        <UserMenu />
      </AppBar>
      <Sidebar classes={{ root: classes.sidebar }} />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}
