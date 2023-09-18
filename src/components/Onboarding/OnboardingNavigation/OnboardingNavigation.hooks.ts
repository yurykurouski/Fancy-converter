import { MutableRefObject } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { OnBoardingStatusSlice } from 'store/onboardingStatus/slices/OnBoardingStatusSlice';

import { ONBOARDING_SCREENS } from '../Onboarding.consts';

export const useNavigationHandlers = ({
  currentPage,
  flatListRef,
}: {
  currentPage: number;
  flatListRef: MutableRefObject<FlatList<unknown>>;
}) => {
  const dispatch = useDispatch();

  const setOnboardingStatus = (value: boolean) =>
    dispatch(OnBoardingStatusSlice.actions.setIsOnBoarded(value));

  const handleNextPress = () => {
    if (currentPage === ONBOARDING_SCREENS.length - 1) {
      return setOnboardingStatus(true);
    }

    if (currentPage === ONBOARDING_SCREENS.length - 1 || !flatListRef?.current)
      return;
    flatListRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  const handleSkip = () => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: ONBOARDING_SCREENS.length - 1,
    });
  };

  return {
    handleNextPress,
    handleSkip,
  };
};
