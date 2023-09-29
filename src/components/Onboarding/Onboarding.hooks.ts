import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { Dimensions } from 'react-native';

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

export const useOnboardingScreenSizeChange = (
  setWindowWidth: Dispatch<SetStateAction<number>>,
) => {
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window: { width } }) => {
        setWindowWidth(width);
      },
    );
    return () => subscription?.remove();
  }, [setWindowWidth]);
};
