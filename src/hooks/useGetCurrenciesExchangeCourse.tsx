import { useCallback, useEffect, useState } from 'react';
import {
  getFromStorage,
  getOnlyCourses,
  setToStorage,
  StorageKeys,
} from 'utils';
import { OnlyCourses } from 'utils/utils.types';

import { currenciesService } from '../services/currencies-service';

export type UseGetCurrenciesExchangeCourse = () => {
  isLoading: boolean;
  exchangeCourse: OnlyCourses;
  reloadCourses: () => void;
};

export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [exchangeCourse, setExchangeCourse] = useState(null);

    const isCoursesCheckedLastHour = useCallback(async () => {
      const currentDate = new Date();
      const lastCoursesUpdate = await getFromStorage(
        StorageKeys.LAST_COURSES_UPDATE,
      );

      if (!lastCoursesUpdate) {
        await setToStorage(
          StorageKeys.LAST_COURSES_UPDATE,
          currentDate.getTime(),
        );

        return false;
      }

      const lastUpdateDate = new Date(Number(lastCoursesUpdate));
      return (
        currentDate.getHours() === lastUpdateDate.getHours() &&
        currentDate.getDate() === lastUpdateDate.getDate() &&
        currentDate.getMonth() === lastUpdateDate.getMonth() &&
        currentDate.getFullYear() === lastUpdateDate.getFullYear()
      );
    }, []);

    const getCoursesFromStorage = useCallback(() => {
      setIsLoading(true);

      getFromStorage(StorageKeys.EXCHANGE_COURSES)
        .then((value: string) => {
          const parsed = JSON.parse(value);
          setExchangeCourse(parsed);
        })
        .then(() => setIsLoading(false));
    }, []);

    const reloadCourses = useCallback(() => {
      setIsLoading(true);

      currenciesService
        .getDailyCourses()
        .then(value => {
          const onlyCourses = getOnlyCourses(value);
          setExchangeCourse(onlyCourses);
          setToStorage(StorageKeys.EXCHANGE_COURSES, onlyCourses);
        })
        .then(() => setIsLoading(false));
    }, []);

    useEffect(() => {
      isCoursesCheckedLastHour().then(isCheckedLastHour => {
        if (!isCheckedLastHour) {
          reloadCourses();
        } else {
          getCoursesFromStorage();
        }
      });
    }, [getCoursesFromStorage, isCoursesCheckedLastHour, reloadCourses]);

    return { isLoading, exchangeCourse, reloadCourses };
  };
