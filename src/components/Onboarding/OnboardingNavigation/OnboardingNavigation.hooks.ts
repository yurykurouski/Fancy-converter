import { Dimensions } from 'react-native';
import Animated, { AnimatedRef } from 'react-native-reanimated';
import { onboardingStatusActions } from 'store/onboardingStatusStore';

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
  const scrollToNextScreen = useScrollToNextScreen(currentPage, scrollListRef);

  return () => {
    if (currentPage === ONBOARDING_SCREENS.length - 1) {
      return onboardingStatusActions.setIsOnBoarded(true);
    }

    scrollToNextScreen();
  };
};
