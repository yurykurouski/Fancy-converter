import { useCallback } from 'react';
import { useLoadCourses } from 'hooks';
import {
  getFromStorage,
  setToStorage,
  showNoConnectionAlert,
  StorageKeys,
} from 'utils';

import { TUseReloadCourses } from './types';

export const useReloadCourses: TUseReloadCourses = (
  setIsLoading,
  getCoursesFromStorage,
) => {
  const loadCourses = useLoadCourses();

  return useCallback(() => {
    setIsLoading(true);

    loadCourses()
      .finally(() => setIsLoading(false))
      .catch(async () => {
        await getFromStorage(StorageKeys.LAST_COURSES_SAVE_DATE).then(oldDate =>
          showNoConnectionAlert(getCoursesFromStorage, oldDate),
        );
        await setToStorage(StorageKeys.LAST_COURSES_UPDATE, null);
      });
  }, [getCoursesFromStorage, loadCourses, setIsLoading]);
};
