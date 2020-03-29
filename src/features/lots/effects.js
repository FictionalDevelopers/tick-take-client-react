import { push } from 'connected-react-router';

import { lotCreationFailed, lotCreationSucceeded } from './actions';

export const createLot = ({ name, description }) => async (dispatch, getState, { apiClient }) => {
  try {
    const { data: lot } = await apiClient.post('/lots', { name, description });

    dispatch(lotCreationSucceeded(lot));
    return dispatch(push(`/profile/lots/${lot._id}`));
  } catch (error) {
    console.log(error);
    const payload = error.response ? error.response.data : { error: error.message };

    dispatch(lotCreationFailed(payload));

    throw payload;
  }
};
