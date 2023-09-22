import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ExchangeCourseSlice } from 'store/exchangeCourses/slices/ExchangeCourseSlice';

import { TSetCoursesLoading } from './types';

export const useSetCoursesLoading = (): TSetCoursesLoading => {
  const dispatch = useDispatch();

  return useCallback(
    value => dispatch(ExchangeCourseSlice.actions.setIsLoading(value)),
    [dispatch],
  );
};
