import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';

import { useCurrentUser } from '@app/features/auth/hooks';

import Sidebar from '../Sidebar';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Layout({ children }) {
  const classes = useStyles();
  const currentUser = useCurrentUser();

  return (
    <div className={classes.root}>
      <AppBar color="default" position="fixed" className={classes.header}>
        <IconButton>DH</IconButton>
      </AppBar>
      <Sidebar classes={{ root: classes.sidebar }} />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}
