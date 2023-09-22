import { useCallback } from 'react';
import { useLoadCourses } from 'hooks';
import { l } from 'resources/localization';
import {
  getFromStorage,
  setToStorage,
  showNoConnectionAlert,
  StorageKeys,
} from 'utils';

import { UseReloadCourses } from './types';

export const useReloadCourses: UseReloadCourses = (
  setIsLoading,
  getCoursesFromStorage,
  startNotification,
) => {
  const loadCourses = useLoadCourses();

  return useCallback(() => {
    setIsLoading(true);

    loadCourses()
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
  }, [getCoursesFromStorage, loadCourses, setIsLoading, startNotification]);
};
