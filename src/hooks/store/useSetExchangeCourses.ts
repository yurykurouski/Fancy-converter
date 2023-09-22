import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ExchangeCourseSlice } from 'store/exchangeCourses/slices/ExchangeCourseSlice';
import { OnlyCourses } from 'utils/utils.types';

import { TSetExchangeCourses } from './types';

export const useSetExchangeCourses = (): TSetExchangeCourses => {
  const dispatch = useDispatch();

  return useCallback(
    (value: OnlyCourses) =>
      dispatch(ExchangeCourseSlice.actions.setExchangeCourses(value)),
    [dispatch],
  );
};
