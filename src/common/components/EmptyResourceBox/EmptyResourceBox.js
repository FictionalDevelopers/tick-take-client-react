import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function EmptyResourceBox({ header, subheader, action }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.header}>{header}</Typography>
      {subheader && (
        <Typography variant="body2" className={classes.subheader}>{subheader}</Typography>
      )}
      {action && (
        <div className={classes.action}>{action}</div>
      )}
    </div>
  );
}

EmptyResourceBox.propTypes = {
  header: PropTypes.node.isRequired,
  subheader: PropTypes.node,
  action: PropTypes.node,
};
EmptyResourceBox.defaultProps = {
  subheader: null,
  action: null,
};
