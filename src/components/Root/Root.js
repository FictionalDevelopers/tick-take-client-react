import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from './styles';

const useStyles = makeStyles(styles);

function Root() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </div>
  );
}

export default Root;
