import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function SidebarLink({ to, children }) {
  const classes = useStyles();
  const { pathname, query } = to;

  const search = queryString.stringify(query);

  const isActive = (match, location) => {
    if (!location.search && !search) {
      return location.pathname === pathname;
    }

    return location.search && search && location.search.includes(search);
  };

  return (
    <Link
      to={{
        pathname,
        search: !isEmpty(query) ? `?${queryString.stringify(query)}` : null,
      }}
      isActive={isActive}
      classes={{ root: classes.root }}
      activeClassName={classes.active}
      component={NavLink}
    >
      {children}
    </Link>
  );
}

SidebarLink.propTypes = {
  to: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  children: PropTypes.node.isRequired,
};
