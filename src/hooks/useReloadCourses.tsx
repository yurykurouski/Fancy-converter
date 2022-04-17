import { useCallback } from 'react';
import { currenciesService } from 'services/currencies-service';
import {
  getFromStorage,
  setToStorage,
  showNoConnectionAlert,
  StorageKeys,
} from 'utils';

import { NOTIFICATION_MESSAGES, UseReloadCourses } from './types';

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
      .catch(async () => {
        await getFromStorage(StorageKeys.LAST_COURSES_SAVE_DATE).then(oldDate =>
          showNoConnectionAlert(getCoursesFromStorage, oldDate),
        );
        await setToStorage(StorageKeys.LAST_COURSES_UPDATE, null);
      })
      .finally(() => setIsLoading(false))
      .then(() => startNotification(NOTIFICATION_MESSAGES.FROM_NETWORK));
  }, [
    getCoursesFromStorage,
    saveDate,
    setExchangeCourse,
    setIsLoading,
    startNotification,
  ]);
