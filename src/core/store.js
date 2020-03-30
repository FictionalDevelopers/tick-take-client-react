import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { reducer } from '@app/features';

import getEnhancedApiClient from './getEnhancedApiClient';

export const history = createBrowserHistory();

export default configureStore({
  reducer: reducer(history),
  devTools: true,
  middleware: [
    ...getDefaultMiddleware({
      thunk: {
        extraArgument: { apiClient: getEnhancedApiClient() },
      },
    }),
    routerMiddleware(history),
  ],
});
