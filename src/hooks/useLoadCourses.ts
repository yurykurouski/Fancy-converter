import { useCallback, useMemo } from 'react';
import { currenciesService } from 'services/currencies-service';

import { useSetCoursesRequestErr } from './store';
import { useSetExchangeCourses, useSetLastUpdateDate } from './store';

export const useLoadCourses = () => {
  const setExchangeCourses = useSetExchangeCourses();
  const setLastUpdateDate = useSetLastUpdateDate();
  const handleError = useSetCoursesRequestErr();

  const currentDate = useMemo(() => Date.now(), []);

  return useCallback(
    async () =>
      currenciesService
        .getDailyCourses()
        .then(({ data: { rates } }) => {
          setExchangeCourses(rates);
          setLastUpdateDate(currentDate);
        })
        .catch(handleError),
    [currentDate, handleError, setExchangeCourses, setLastUpdateDate],
  );
};
