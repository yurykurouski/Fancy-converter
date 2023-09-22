import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { OnBoardingStatusSlice } from 'store/onboardingStatus/slices/OnBoardingStatusSlice';

import { TSetOnBoardingStatus } from './types';

export const useSetOnBoardingStatus = (): TSetOnBoardingStatus => {
  const dispatch = useDispatch();

  return useCallback(
    (value: boolean) => {
      dispatch(OnBoardingStatusSlice.actions.setIsOnBoarded(value));
      dispatch(OnBoardingStatusSlice.actions.setIsLoadingStatus(false));
    },
    [dispatch],
  );
};
