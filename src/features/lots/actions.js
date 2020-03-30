import { createAction } from '@reduxjs/toolkit';

const MODULE = 'LOTS';

export const lotCreationSucceeded = createAction(`${MODULE}/LOT_CREATION_SUCCEEDED`);
export const lotCreationFailed = createAction(`${MODULE}/LOT_CREATION_FAILED`);
