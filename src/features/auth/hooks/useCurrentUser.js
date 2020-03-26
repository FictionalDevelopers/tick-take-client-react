import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../selectors';

export default function useCurrentUser() {
  return useSelector(selectCurrentUser);
}
