import { Dimensions } from 'react-native';
import Animated, { AnimatedRef } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { OnBoardingStatusSlice } from 'store/onboardingStatus/slices/OnBoardingStatusSlice';

import { ONBOARDING_SCREENS } from '../Onboarding.consts';

const useScrollToNextScreen =
  (currentPage: number, scrollListRef: AnimatedRef<Animated.ScrollView>) =>
  () => {
    const windowWidth = Dimensions.get('window').width;

    if (
      currentPage === ONBOARDING_SCREENS.length - 1 ||
      !scrollListRef?.current
    ) {
      return;
    }
    scrollListRef.current.scrollTo({
      x: (currentPage + 1) * windowWidth,
    });
  };

export const useHandleOnboardingSkip =
  (scrollListRef: AnimatedRef<Animated.ScrollView>) => () => {
    const windowWidth = Dimensions.get('window').width;

    scrollListRef.current?.scrollTo({
      x: (ONBOARDING_SCREENS.length - 1) * windowWidth,
      animated: true,
    });
  };

export const useHandleOnboardingNextPress = ({
  currentPage,
  scrollListRef,
}: {
  currentPage: number;
  scrollListRef: AnimatedRef<Animated.ScrollView>;
}) => {
  const dispatch = useDispatch();

  const setOnboardingStatus = (value: boolean) =>
    dispatch(OnBoardingStatusSlice.actions.setIsOnBoarded(value));

  const scrollToNextScreen = useScrollToNextScreen(currentPage, scrollListRef);

  return () => {
    if (currentPage === ONBOARDING_SCREENS.length - 1) {
      return setOnboardingStatus(false);
    }

    scrollToNextScreen();
  };
};
