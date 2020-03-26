import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Logo() {
  const classes = useStyles();

  return (
    <Link className={classes.root} to="/">Tick Take</Link>
  );
}
