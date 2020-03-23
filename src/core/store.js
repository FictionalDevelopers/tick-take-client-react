import { configureStore } from '@reduxjs/toolkit';

import { reducer } from '@app/features';

export default configureStore({
  reducer,
  devTools: true,
});
