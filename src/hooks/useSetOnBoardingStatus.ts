import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { OnBoardingStatusSlice } from 'store/onboardingStatus/slices/OnBoardingStatusSlice';

export const useSetOnBoardingStatus = () => {
  const dispatch = useDispatch();

  return useCallback(
    (value: boolean) => {
      dispatch(OnBoardingStatusSlice.actions.setIsOnBoarded(value));
      dispatch(OnBoardingStatusSlice.actions.setIsLoadingStatus(false));
    },
    [dispatch],
  );
};
