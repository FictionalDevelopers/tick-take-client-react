import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form } from 'react-final-form';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { FormField } from '@app/common/components';
import { requiredNotEmpty } from '@app/common/utils/validation';

import { createLot } from '../../effects';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function LotCreationForm({ classes: cl }) {
  const classes = useStyles({ classes: cl });
  const dispatch = useDispatch();

  const render = ({ handleSubmit, submitting }) => {
    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.field}>
          <Field
            name="name"
            type="text"
            label="Name"
            variant="outlined"
            component={FormField}
            validate={requiredNotEmpty}
            fullWidth
          />
        </div>
        <div className={classes.field}>
          <Field
            name="description"
            type="text"
            label="Description"
            variant="outlined"
            component={FormField}
            multiline
            validate={requiredNotEmpty}
            rows={4}
            fullWidth
          />
        </div>
        <div className={classes.footer}>
          <Button disabled={submitting} type="submit" variant="contained" color="primary">
            Create lot
          </Button>
        </div>
      </form>
    );
  };

  return (
    <Form
      render={render}
      onSubmit={async ({ name, description }, { reset }) => {
        try {
          await dispatch(createLot({ name, description }));
        } catch (error) {
          return error;
        }
      }}
    />
  );
}
