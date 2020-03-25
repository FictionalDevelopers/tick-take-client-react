import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function AuthPage({ title, children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" align="right" className={classes.title}>
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
}

AuthPage.propTypes = {
  title: PropTypes.node.isRequired,
};
