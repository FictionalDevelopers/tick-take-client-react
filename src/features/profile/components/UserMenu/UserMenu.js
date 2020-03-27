import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getAbbreviation } from '@app/common/utils';
import { useCurrentUser, useLogout } from '@app/features/auth/hooks';

import styles from './styles';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(styles);

export default function UserMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const currentUser = useCurrentUser();
  const logout = useLogout();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.trigger}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        {getAbbreviation(currentUser.name)}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ListSubheader className={classes.infoItem}>
          <div className={classes.name}>{currentUser.name}</div>
          <div>{currentUser.email}</div>
        </ListSubheader>
        <MenuItem onClick={handleClose} component={Link} to="/profile/info">Account info</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/profile/security">Account security</MenuItem>
        <MenuItem onClick={logout}>Sign out</MenuItem>
      </Menu>
    </div>
  );
}
