import React from 'react';
import { Field, Form } from 'react-final-form';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { FormField } from '@app/common/components';
import { composeValidators, email, required } from '@app/common/utils/validation';

import { useLogin } from '../../hooks';

import styles from './styles';

const useStyles = makeStyles(styles);

const validateEmail = composeValidators(required, email);

export default function LoginForm() {
  const login = useLogin();
  const classes = useStyles();

  const render = ({ handleSubmit, submitting }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className={classes.field}>
          <Field
            name="email"
            type="text"
            label="Email"
            placeholder="Email"
            variant="outlined"
            component={FormField}
            validate={validateEmail}
            fullWidth
          />
        </div>
        <div className={classes.field}>
          <Field
            name="password"
            type="text"
            label="Password"
            variant="outlined"
            component={FormField}
            validate={required}
            fullWidth
          />
        </div>
        <div className={classes.footer}>
          <Link to="/register" component={RouterLink}>
            I don't have an account
          </Link>
          <Button disabled={submitting} type="submit" variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
    );
  };

  return (
    <Form
      render={render}
      onSubmit={async ({ email, password }) => {
        try {
          await login({ email, password });
        } catch (error) {
          return error;
        }
      }}
    />
  );
}
