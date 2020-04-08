import { push } from 'connected-react-router';
import { stringify } from 'query-string';

import { PAGINATION } from '@app/common/constants';

import {
  lotCreationFailed,
  lotCreationSucceeded,
  lotListRetrievalFailed,
  lotListRetrievalStarted,
  lotListRetrievalSucceeded,
  lotRetrievalFailed,
  lotRetrievalSucceeded,
} from './actions';

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

export const fetchLotList = ({
  status,
  user,
  page = 1,
  limit = PAGINATION.DEFAULT_LIMIT,
}) => async (dispatch, getState, { apiClient }) => {
  try {
    dispatch(lotListRetrievalStarted({}));
    const { data: lots } = await apiClient.get(
      `/lots?${stringify({
        page,
        limit,
        status,
        user,
      })}`,
    );

    return dispatch(lotListRetrievalSucceeded(lots));
  } catch (error) {
    const payload = error.response ? error.response.data : { error: error.message };

    return dispatch(lotListRetrievalFailed(payload));
  }
};
