import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import styles from './styles';

const useStyles = makeStyles(styles);

const DEFAULT_INITIAL_MAX_HEIGHT = 200;

function Section({ title, defaultClosed, classes: parentClasses, children }) {
  const collapseRef = useRef();

  const [isOpen, setIsOpen] = useState(!defaultClosed);
  const [maxHeight, setMaxHeight] = useState(!defaultClosed ? DEFAULT_INITIAL_MAX_HEIGHT : 0);

  const classes = useStyles({ classes: parentClasses });

  const toggle = () => {
    const shouldBeOpen = !isOpen;
    setMaxHeight(shouldBeOpen ? collapseRef.current.scrollHeight : 0);
    setIsOpen(shouldBeOpen);
  };

  return (
    <div className={classes.root}>
      <ButtonBase onClick={toggle} className={classes.title}>
        {title}
        <ExpandLessIcon
          className={cn(classes.icon, {
            [classes.rotated]: !isOpen,
          })}
        />
      </ButtonBase>
      <div
        style={{ maxHeight }}
        className={cn(classes.collapse, {
          [classes.collapseHidden]: isOpen,
        })}
        ref={collapseRef}
      >
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.node.isRequired,
  defaultClosed: PropTypes.bool,
};
Section.defaultProps = {
  defaultClosed: false,
};

export default Section;
