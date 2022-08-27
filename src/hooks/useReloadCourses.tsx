import { useCallback } from 'react';
import { l } from 'resources/localization';
import { currenciesService } from 'services/currencies-service';
import {
  getFromStorage,
  setToStorage,
  showNoConnectionAlert,
  StorageKeys,
} from 'utils';

import { UseReloadCourses } from './types';

export const useReloadCourses: UseReloadCourses = (
  setIsLoading,
  setExchangeCourse,
  saveDate: string,
  getCoursesFromStorage,
  startNotification,
) =>
  useCallback(() => {
    setIsLoading(true);

    currenciesService
      .getDailyCourses()
      .then(({ rates }) => {
        setExchangeCourse(rates);

        setToStorage(StorageKeys.EXCHANGE_COURSES, rates);
        setToStorage(StorageKeys.LAST_COURSES_SAVE_DATE, saveDate);
      })

      .finally(() => setIsLoading(false))
      .then(() =>
        startNotification(l['notification.message.update_courses.network']),
      )
      .catch(async () => {
        await getFromStorage(StorageKeys.LAST_COURSES_SAVE_DATE).then(oldDate =>
          showNoConnectionAlert(getCoursesFromStorage, oldDate),
        );
        await setToStorage(StorageKeys.LAST_COURSES_UPDATE, null);
      });
  }, [
    getCoursesFromStorage,
    saveDate,
    setExchangeCourse,
    setIsLoading,
    startNotification,
  ]);
