import { useDispatch } from 'react-redux';

import { logout } from '../effects';

export default function useLogout() {
  const dispatch = useDispatch();

  return () => {
    dispatch(logout());
  };
}
