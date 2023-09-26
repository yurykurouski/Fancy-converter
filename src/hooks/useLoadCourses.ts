import { useCallback, useMemo } from 'react';
import { currenciesService } from 'services/currencies-service';
import { getSaveDate } from 'utils';

import { useSetCoursesRequestErr } from './store';
import { useSetExchangeCourses, useSetLastUpdateDate } from './store';

export const useLoadCourses = () => {
  const setExchangeCourses = useSetExchangeCourses();
  const setLastUpdateDate = useSetLastUpdateDate();
  const handleError = useSetCoursesRequestErr();

  const currentDate = useMemo(() => new Date(), []);
  const saveDate = getSaveDate(currentDate);

  return useCallback(
    async () =>
      currenciesService
        .getDailyCourses()
        .then(({ rates }) => {
          setExchangeCourses(rates);
          setLastUpdateDate(saveDate);
        })
        .catch(handleError),
    [handleError, saveDate, setExchangeCourses, setLastUpdateDate],
  );
};
