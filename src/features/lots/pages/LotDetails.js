import React from 'react';
import { useParams } from 'react-router-dom';
import isNil from 'lodash/isNil';
import { useSnackbar } from 'notistack';

import { makeStyles } from '@material-ui/core/styles';

import { EditableInfoField } from '@app/common/components';
import { composeValidators, notEmpty, required } from '@app/common/utils/validation';

import { useLotDetails } from '../hooks';
import { Layout } from '../components';

const nameValidator = composeValidators(required, notEmpty('Name should not be empty.'));
const descriptionValidator = composeValidators(required, notEmpty('Description should not be empty.'));

const useStyles = makeStyles({
  pageContent: {
    maxWidth: 800,
  },
});

export default function LotCreation() {
  const classes = useStyles();
  const { lotId } = useParams();
  const lotDetails = useLotDetails(lotId);
  const { enqueueSnackbar } = useSnackbar();

  if (isNil(lotDetails)) {
    return null;
  }

  // @TODO Implement once ready on BE
  const updateField = (name) => (newValue) => {
    return enqueueSnackbar(`Updated ${name}`, {
      variant: 'success',
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  };

  const onFail = (error) => {
    return enqueueSnackbar(error, {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  };

  const title = (
    <EditableInfoField
      initialValue={lotDetails.name}
      onSuccess={updateField('name')}
      validate={nameValidator}
      onFail={onFail}
    />
  );

  return (
    <Layout title={title} classes={{ content: classes.pageContent }}>
      <EditableInfoField
        multiline
        initialValue={lotDetails.description}
        onSuccess={updateField('description')}
        validate={descriptionValidator}
        onFail={onFail}
      />
    </Layout>
  );
}
