import { useEffect, useMemo, useState } from 'react';
import { useGetCoursesFromStorage, useReloadCourses } from 'hooks';
import { getIsCoursesCheckedLastHour, getSaveDate } from 'utils';
import { OnlyCourses } from 'utils/utils.types';

import { UseGetCurrenciesExchangeCourse } from './types';

export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  startNotification => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [exchangeCourse, setExchangeCourse] = useState<OnlyCourses>();

    const currentDate = useMemo(() => new Date(), []);
    const saveDate = getSaveDate(currentDate);

    const getCoursesFromStorage = useGetCoursesFromStorage(
      setExchangeCourse,
      startNotification,
    );

    const reloadCourses = useReloadCourses(
      setIsLoading,
      setExchangeCourse,
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

    return { isLoading, exchangeCourse, reloadCourses };
  };
