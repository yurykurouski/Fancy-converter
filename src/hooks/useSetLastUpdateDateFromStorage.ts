import { useCallback } from 'react';

import { useSetLastUpdateDate } from './store';

export const useSetLastUpdateDateFromStorage = () => {
  const setLastUpdateDate = useSetLastUpdateDate();

  return useCallback(
    (value: string) => {
      setLastUpdateDate(Number(value));
    },
    [setLastUpdateDate],
  );
};
