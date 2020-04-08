import { useSelector } from 'react-redux';

import { selectLotListMeta } from '../selectors';

export default function useLotListMeta() {
  return useSelector(selectLotListMeta);
}
