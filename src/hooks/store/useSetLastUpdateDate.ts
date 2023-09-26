import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ExchangeCourseSlice } from 'store/exchangeCourses/slices/ExchangeCourseSlice';

import { TSetLastUpdateDate } from './types';

export const useSetLastUpdateDate = (): TSetLastUpdateDate => {
  const dispatch = useDispatch();

  return useCallback(
    (value: number) =>
      dispatch(ExchangeCourseSlice.actions.setLastUpdateDate(value)),
    [dispatch],
  );
};
