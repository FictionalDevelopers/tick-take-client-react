import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Layout({ title, children, classes: parentClasses }) {
  const classes = useStyles({ classes: parentClasses });

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>{title}</Typography>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}
