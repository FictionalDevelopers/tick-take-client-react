import { push } from 'connected-react-router';

import { apiClient } from '@app/common/utils';

import { lotCreationFailed, lotCreationSucceeded } from './actions';
import { selectToken } from '../auth/selectors';

export const createLot = ({ name, description }) => async (dispatch, getState) => {
  try {
    const token = selectToken(getState());
    const { data: lot } = await apiClient.post('/lots', { name, description }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(lotCreationSucceeded(lot));
    return dispatch(push(`/profile/lots/${lot._id}`));
  } catch (error) {
    const payload = error.response ? error.response.data : { error: error.message };

    dispatch(lotCreationFailed(payload));

    throw payload;
  }
};
