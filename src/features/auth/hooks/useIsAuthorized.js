import { useSelector } from 'react-redux';

import { selectIsAuthorized } from '../selectors';

export default function useIsAuthorized() {
  return useSelector(selectIsAuthorized);
}
