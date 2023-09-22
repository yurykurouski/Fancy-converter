import { useCallback } from 'react';

import { useSetOnBoardingStatus } from './store';

export const useSetOnboardingFromStorage = (): ((
  value: string | null,
) => void) => {
  const setOnBoardingStatus = useSetOnBoardingStatus();

  return useCallback(
    (value: string | null) => {
      setOnBoardingStatus(value === 'true');
    },
    [setOnBoardingStatus],
  );
};
