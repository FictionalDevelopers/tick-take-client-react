import React from 'react';
import { Field, Form } from 'react-final-form';
import { Link as RouterLink } from 'react-router-dom';
import _get from 'lodash/fp/get';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { FormField } from '@app/common/components';
import { composeValidators, email, equalsTo, minLength, notEmpty, required } from '@app/common/utils/validation';

import { useRegister } from '../../hooks';

import styles from './styles';

const useStyles = makeStyles(styles);

const validateName = composeValidators(required, notEmpty());
const validateEmail = composeValidators(required, email);
const validatePassword = composeValidators(required, minLength(3));

export default function RegisterForm() {
  const classes = useStyles();
  const register = useRegister();

  const render = ({ handleSubmit, submitting }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className={classes.field}>
          <Field
            name="name"
            type="text"
            label="Name"
            variant="outlined"
            component={FormField}
            validate={validateName}
            fullWidth
          />
        </div>
        <div className={classes.field}>
          <Field
            name="email"
            type="text"
            label="Email"
            variant="outlined"
            component={FormField}
            validate={validateEmail}
            fullWidth
          />
        </div>
        <div className={classes.field}>
          <Field
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            component={FormField}
            validate={validatePassword}
            fullWidth
          />
        </div>
        <div className={classes.field}>
          <Field
            name="passwordConfirm"
            type="password"
            label="Password confirmation"
            variant="outlined"
            component={FormField}
            validate={equalsTo(_get('password'), { message: 'Passwords dont\'t match' })}
            fullWidth
          /></div>
        <div className={classes.footer}>
          <Link to="/login" component={RouterLink}>
            I have an account
          </Link>
          <Button disabled={submitting} type="submit" variant="contained" color="primary">
            Sign me up
          </Button>
        </div>
      </form>
    );
  };

  return (
    <Form
      render={render}
      onSubmit={async ({ name, email, password, passwordConfirm }) => {
        try {
          await register({ name, email, password, passwordConfirm });
        } catch (error) {
          return error;
        }
      }}
    />
  );
}
