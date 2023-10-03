import { Dispatch, SetStateAction, useCallback } from 'react';

import { TEventHandler } from './Onboarding.types';

export const useHandleOnboardingScroll = (
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  windowWidth: number,
): TEventHandler =>
  useCallback(
    event => {
      const scrollOffset = event.nativeEvent.contentOffset.x;

      const roundedEnd = Math.round(scrollOffset / windowWidth);

      if (roundedEnd !== currentPage) {
        setCurrentPage(roundedEnd);
      }
    },
    [currentPage, setCurrentPage, windowWidth],
  );
