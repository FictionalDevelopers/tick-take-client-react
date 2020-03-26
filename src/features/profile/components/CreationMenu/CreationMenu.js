import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function CreationMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

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
        color="primary"
        variant="contained"
        endIcon={<ExpandMoreIcon />}
      >
        Create
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          to="/profile/lots/new"
          component={Link}
          className={classes.item}
          onClick={handleClose}
          divider
        >
         <div>A Lot</div>
          <div className={classes.caption}>Add items to sell.</div>
        </MenuItem>
        <MenuItem
          component={Link}
          to="/profile/auctions/new"
          className={classes.item}
          onClick={handleClose}
        >
          <div>An Auction</div>
          <div className={classes.caption}>Prepare a place to sell your items.</div>
        </MenuItem>
      </Menu>
    </div>
  );
}
