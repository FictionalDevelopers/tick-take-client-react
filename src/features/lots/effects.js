import { apiClient } from '@app/common/utils';
import { lotCreationFailed, lotCreationSucceeded } from './actions';
import { selectToken } from '../auth/selectors';

export const createLot = ({ name, description }) => async (dispatch, getState) => {
  try {
    const token = selectToken(getState());
    const result = await apiClient.post('/lots', { name, description }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return dispatch(lotCreationSucceeded(result));
  } catch (error) {
    const payload = error.response ? error.response.data : { error: error.message };

    dispatch(lotCreationFailed(payload));

    throw payload;
  }
};
