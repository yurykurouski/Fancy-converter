import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ExchangeCourseSlice } from 'store/exchangeCourses/slices/ExchangeCourseSlice';

import { TSetCoursesRequestError } from './types';

export const useSetCoursesRequestErr = (): TSetCoursesRequestError => {
  const dispatch = useDispatch();

  return useCallback(
    (value: string) =>
      dispatch(ExchangeCourseSlice.actions.setRequestError(value)),
    [dispatch],
  );
};
