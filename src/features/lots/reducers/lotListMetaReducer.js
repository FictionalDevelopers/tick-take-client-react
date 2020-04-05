import { createReducer } from '@reduxjs/toolkit';

import { PAGINATION } from '@app/common/constants';

import { pageChange, lotListRetrievalFailed, lotListRetrievalStarted, lotListRetrievalSucceeded } from '../actions';

const initialState = {
  limit: PAGINATION.DEFAULT_LIMIT,
  isFetching: false,
  currentPage: 1,
  pages: 0,
  count: 0,
};

export default createReducer(initialState, {
  [lotListRetrievalStarted]: (state) => {
    state.isFetching = true;
  },
  [lotListRetrievalSucceeded]: (state, { payload: { currentPage, pages, count } }) => {
    return {
      ...state,
      currentPage,
      pages,
      count,
      isFetching: false,
    };
  },
  [lotListRetrievalFailed]: (state) => {
    state.isFetching = false;
  },
  [pageChange]: (state, { payload: { page } }) => {
    state.currentPage = page;
  },
});
