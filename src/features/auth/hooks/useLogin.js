import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../effects';

export default function useLogin() {
  const dispatch = useDispatch();
  const history = useHistory();

  return async ({ email, password }) => {
    await dispatch(login({ email, password }));
    history.push('/');
  };
}
