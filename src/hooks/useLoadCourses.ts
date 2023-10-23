import { useCallback } from 'react';
import { currenciesService } from 'services/currencies-service';

import { useSetCoursesRequestErr } from './store';
import { useSetExchangeCourses } from './store';

export const useLoadCourses = () => {
  const setExchangeCourses = useSetExchangeCourses();
  const handleError = useSetCoursesRequestErr();

  return useCallback(
    async () =>
      currenciesService
        .getDailyCourses()
        .then(({ data: { rates } }) => {
          setExchangeCourses(rates);
        })
        .catch(handleError),
    [handleError, setExchangeCourses],
  );
};
