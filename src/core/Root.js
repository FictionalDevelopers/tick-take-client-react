import React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Routes from './Routes';

import store from './store';
import theme from './theme';

import styles from './styles';

const useStyles = makeStyles(styles);

function Root() {
  useStyles();

  return (
    <ReactReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ReactReduxProvider>
  );
}

export default Root;
