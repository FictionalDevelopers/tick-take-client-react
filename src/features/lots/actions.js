import { createAction } from '@reduxjs/toolkit';

const MODULE = 'LOTS';

export const lotCreationSucceeded = createAction(`${MODULE}/LOT_CREATION_SUCCEEDED`);
export const lotCreationFailed = createAction(`${MODULE}/LOT_CREATION_FAILED`);

export const lotRetrievalSucceeded = createAction(`${MODULE}/LOT_RETRIEVAL_SUCCEEDED`);
export const lotRetrievalFailed = createAction(`${MODULE}/LOT_RETRIEVAL_FAILED`);

export const lotListRetrievalStarted = createAction(`${MODULE}/LOT_LIST_RETRIEVAL_STARTED`);
export const lotListRetrievalSucceeded = createAction(`${MODULE}/LOT_LIST_RETRIEVAL_SUCCEEDED`);
export const lotListRetrievalFailed = createAction(`${MODULE}/LOT_LIST_RETRIEVAL_FAILED`);

export const pageChange = createAction(`${MODULE}/PAGE_CHANGE`);
