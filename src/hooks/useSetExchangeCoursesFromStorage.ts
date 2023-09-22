import { useCallback, useMemo } from 'react';
import { getIsCoursesCheckedLastHour } from 'utils';

import { useSetExchangeCourses } from './store';
import { useLoadCourses } from './useLoadCourses';

export const useSetExchangeCoursesFromStorage = () => {
  const setExchangeCourses = useSetExchangeCourses();

  const loadCourses = useLoadCourses();

  const currentDate = useMemo(() => new Date(), []);

  return useCallback(
    (value: string) => {
      getIsCoursesCheckedLastHour(currentDate).then(isCheckedLastHour => {
        if (isCheckedLastHour || !value) {
          loadCourses();
        } else {
          setExchangeCourses(JSON.parse(value));
        }
      });
    },
    [currentDate, loadCourses, setExchangeCourses],
  );
};
