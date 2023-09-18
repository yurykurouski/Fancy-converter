import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCoursesFromStorage, useReloadCourses } from 'hooks';
import { ExchangeCourseSlice } from 'store/exchangeCourses/slices/ExchangeCourseSlice';
import { getIsCoursesCheckedLastHour, getSaveDate } from 'utils';

import { UseGetCurrenciesExchangeCourse } from './types';

//TODO: need refactor
export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  startNotification => {
    const dispatch = useDispatch();

    const setExchangeCourses = useCallback(
      value => dispatch(ExchangeCourseSlice.actions.setExchangeCourses(value)),
      [dispatch],
    );
    const setIsLoading = useCallback(
      value => dispatch(ExchangeCourseSlice.actions.setIsLoading(value)),
      [dispatch],
    );
    const currentDate = useMemo(() => new Date(), []);
    const saveDate = getSaveDate(currentDate);

    const getCoursesFromStorage = useGetCoursesFromStorage(
      setExchangeCourses,
      startNotification,
    );

    const reloadCourses = useReloadCourses(
      setIsLoading,
      setExchangeCourses,
      saveDate,
      getCoursesFromStorage,
      startNotification,
    );

    useEffect(() => {
      getIsCoursesCheckedLastHour(currentDate).then(isCheckedLastHour => {
        if (!isCheckedLastHour) {
          reloadCourses();
        } else {
          getCoursesFromStorage(true);
        }
      });
    }, [currentDate, getCoursesFromStorage, reloadCourses]);

    return { reloadCourses };
  };
