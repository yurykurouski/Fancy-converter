import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { FlatList } from 'react-native';

import { ONBOARDING_SCREENS } from '../Onboarding.consts';

export const useNavigationHandlers = ({
  currentPage,
  flatListRef,
  setIsOnboarded,
}: {
  currentPage: number;
  flatListRef: MutableRefObject<FlatList<unknown>>;
  setIsOnboarded: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleNextPress = () => {
    if (currentPage === ONBOARDING_SCREENS.length - 1) {
      return setIsOnboarded(true);
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
