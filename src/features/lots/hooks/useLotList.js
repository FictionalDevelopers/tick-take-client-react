import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PAGINATION } from '@app/common/constants';

import { selectLotList } from '../selectors';
import { fetchLotList } from '../effects';

export default function useLotList({
  status,
  user = null,
  page = 1,
  limit = PAGINATION.DEFAULT_LIMIT,
} = {}) {
  const dispatch = useDispatch();
  const lotList = useSelector(selectLotList);


  useEffect(() => {
    if (user) {
      dispatch(fetchLotList({ status, user, page, limit }));
    }
  }, [status, user, page, limit, dispatch]);

  return lotList;
}
