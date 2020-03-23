import { createAction } from '@reduxjs/toolkit';

const MODULE = 'AUTH';

export const loginSuccessed = createAction(`${MODULE}/LOGIN_SUCCESSED`);
