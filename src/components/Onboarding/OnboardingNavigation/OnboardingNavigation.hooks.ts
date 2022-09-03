import { MutableRefObject, useContext } from 'react';
import { FlatList } from 'react-native';
import { OnboardingContext } from 'context/OnboardingContext';

import { ONBOARDING_SCREENS } from '../Onboarding.consts';

export const useNavigationHandlers = ({
  currentPage,
  flatListRef,
}: {
  currentPage: number;
  flatListRef: MutableRefObject<FlatList<unknown>>;
}) => {
  const { setOnboardingStatus } = useContext(OnboardingContext);

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
