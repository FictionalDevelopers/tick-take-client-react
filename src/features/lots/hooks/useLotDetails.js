import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isNil from 'lodash/isNil';

import { selectLotDetails } from '../selectors';
import { fetchLotDetails } from '../effects';

export default function useLotDetails(lotId) {
  const dispatch = useDispatch();
  const lotDetails = useSelector(selectLotDetails(lotId));

  useEffect(() => {
    if (isNil(lotDetails)) {
      dispatch(fetchLotDetails(lotId));
    }
  }, [lotId, lotDetails, dispatch]);

  return lotDetails;
}
