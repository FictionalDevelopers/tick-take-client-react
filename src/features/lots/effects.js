import { push } from 'connected-react-router';

import { lotCreationFailed, lotCreationSucceeded, lotRetrievalFailed, lotRetrievalSucceeded } from './actions';

export const createLot = ({ name, description }) => async (dispatch, getState, { apiClient }) => {
  try {
    const { data: lot } = await apiClient.post('/lots', { name, description });

    dispatch(lotCreationSucceeded(lot));
    return dispatch(push(`/profile/lots/${lot._id}`));
  } catch (error) {
    const payload = error.response ? error.response.data : { error: error.message };

    dispatch(lotCreationFailed(payload));

    throw payload;
  }
};

export const fetchLotDetails = (lotId) => async (dispatch, getState, { apiClient }) => {
  try {
    const { data: lot } = await apiClient.get(`/lots/${lotId}`);

    dispatch(lotRetrievalSucceeded(lot));
    return dispatch(push(`/profile/lots/${lot._id}`));
  } catch (error) {
    const payload = error.response ? error.response.data : { error: error.message };

    return dispatch(lotRetrievalFailed(payload));
  }
};
