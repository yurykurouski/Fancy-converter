import { useState } from 'react';
import { SCREEN_WIDTH } from 'constants/constants';

import { EventHandler, UseOnboardingHandlers } from './Onboarding.types';

export const useOnboardingHandlers: UseOnboardingHandlers = flatListRef => {
  const [scrollStart, setScrollStart] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll: EventHandler = event => {
    const scrollOffset = event.nativeEvent.contentOffset.x;

    const roundedEnd = Math.round(scrollOffset / SCREEN_WIDTH);

    if (roundedEnd !== currentPage) {
      setCurrentPage(roundedEnd);
    }
  };

  const handleEndDrag: EventHandler = event => {
    const { contentOffset } = event.nativeEvent;

    const roundedEnd = Math.round(contentOffset.x / SCREEN_WIDTH);
    const absoluteDiff = Math.abs(scrollStart) - Math.abs(contentOffset.x);

    if (Math.abs(absoluteDiff) > SCREEN_WIDTH / 2) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: absoluteDiff < 0 ? roundedEnd : roundedEnd !== 0 && roundedEnd,
      });
    } else {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: currentPage,
      });
    }
  };

  const handleStartDrag: EventHandler = event => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    setScrollStart(scrollOffset);
  };

  return {
    currentPage,
    handleScroll,
    handleEndDrag,
    handleStartDrag,
  };
};
