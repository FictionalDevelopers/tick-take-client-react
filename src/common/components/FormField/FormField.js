import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

export default function FormField({ input, meta, ...rest }) {
  const error = meta.touched && meta.error ? meta.error : null;
  const submitError = !meta.dirtySinceLastSubmit && meta.submitError ? meta.submitError : null;

  return (
    <TextField
      {...input}
      {...rest}
      error={!!(error || submitError)}
      helperText={error || submitError}
    />
  );
}

FormField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    dirtySinceLastSubmit: PropTypes.bool.isRequired,
    error: PropTypes.any,
    submitError: PropTypes.any,
  }).isRequired,
};
