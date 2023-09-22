import { useCallback, useMemo } from 'react';
import { currenciesService } from 'services/currencies-service';
import { getSaveDate } from 'utils';

import { useSetExchangeCourses, useSetLastUpdateDate } from './store';

export const useLoadCourses = () => {
  const setExchangeCourses = useSetExchangeCourses();
  const setLastUpdateDate = useSetLastUpdateDate();

  const currentDate = useMemo(() => new Date(), []);
  const saveDate = getSaveDate(currentDate);

  return useCallback(
    async () =>
      currenciesService.getDailyCourses().then(({ rates }) => {
        setExchangeCourses(rates);
        setLastUpdateDate(saveDate);
      }),
    [saveDate, setExchangeCourses, setLastUpdateDate],
  );
};
