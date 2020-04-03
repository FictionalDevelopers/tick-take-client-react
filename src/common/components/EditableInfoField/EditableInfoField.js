import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import pipe from 'lodash/fp/pipe';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { normalizeField, normalizeMultilineField, textToHtml } from './normalize';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function EditableInfoField({ onSuccess, initialValue, onFail, validate, multiline }) {
  const classes = useStyles();
  const inputRef = useRef();
  const [isEditMode, setIsEditMode] = useState(false);
  const normalize = multiline ? normalizeMultilineField : normalizeField;

  useEffect(() => {
    if (isEditMode) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  const cancel = () => {
    inputRef.current.innerText = initialValue;
    setIsEditMode(false);
  };

  const save = () => {
    const newValue = normalize(inputRef.current.innerText);

    if (validate && onFail) {
      const error = validate(newValue);

      if (error) {
        return onFail(error);
      }
    }

    inputRef.current.innerText = newValue;
    setIsEditMode(false);
    return onSuccess(newValue);
  };

  const enableEditMode = () => {
    setIsEditMode(true);
  };

  const handleKeyboardSave = (event) => {
    if (event.keyCode === 13 && (event.metaKey || event.ctrlKey)) {
      save();
    }
  };

  return (
    <div className={cn(classes.root, {
      [classes.editRoot]: isEditMode,
    })}>
      <div
        className={classes.inner}
        onClick={enableEditMode}
        onKeyDown={handleKeyboardSave}
      >
        <div
          ref={inputRef}
          contentEditable={isEditMode}
          dangerouslySetInnerHTML={{ __html: pipe(normalize, textToHtml)(initialValue) }}
          className={classes.content}
        />
      </div>
      <div className={cn(classes.actions, {
        [classes.editActions]: isEditMode,
      })}>
        <Button variant="text" color="secondary" className={classes.action} onClick={cancel}>
          Cancel
        </Button>
        <Button variant="text" color="primary" className={classes.action} onClick={save}>
          Save
        </Button>
      </div>
    </div>
  );
}

EditableInfoField.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
  onFail: PropTypes.func,
  validate: PropTypes.func,
  multiline: PropTypes.bool,
};
EditableInfoField.defaultProps = {
  initialValue: '',
  onFail: null,
  validate: false,
};
