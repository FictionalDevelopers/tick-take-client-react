import React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { SnackbarProvider } from 'notistack';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';

import store, { history } from './store';
import theme from './theme';

function Root() {
  return (
    <ReactReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <CssBaseline />
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </ConnectedRouter>
    </ReactReduxProvider>
  );
}

export default Root;
