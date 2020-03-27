import React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';

import store from './store';
import theme from './theme';

function Root() {
  return (
    <ReactReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ReactReduxProvider>
  );
}

export default Root;
