import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { register } from '../effects';

export default function useRegister() {
  const dispatch = useDispatch();
  const history = useHistory();

  return async ({ name, email, password, passwordConfirm }) => {
    await dispatch(register({ name, email, password, passwordConfirm }));
    history.push('/');
  };
}
