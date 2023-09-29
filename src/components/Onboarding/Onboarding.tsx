import React, { useState } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';

import { ONBOARDING_SCREENS } from './Onboarding.consts';
import {
  useHandleOnboardingScroll,
  useOnboardingScreenSizeChange,
} from './Onboarding.hooks';
import { OnboardingNavigation } from './OnboardingNavigation';

import { useStyles } from './Onboarding.styles';

export const Onboarding = () => {
  //NOTE: for cases if window size is changing during onboarding
  const [windowWidth, setWindowWidth] = useState(WINDOW_WIDTH);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollListRef = useAnimatedRef<Animated.ScrollView>();

  const styles = useStyles();

  const handleScroll = useHandleOnboardingScroll(
    currentPage,
    setCurrentPage,
    windowWidth,
  );

  useOnboardingScreenSizeChange(setWindowWidth);

  return (
    <View style={styles.contentContainer}>
      <Animated.ScrollView
        ref={scrollListRef}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        snapToOffsets={[0, windowWidth, windowWidth * 2]}
        overScrollMode="never"
        horizontal>
        {ONBOARDING_SCREENS.map((Component, i) => (
          <Component windowWidth={windowWidth} key={i} />
        ))}
      </Animated.ScrollView>
      <OnboardingNavigation
        currentPage={currentPage}
        scrollListRef={scrollListRef}
      />
    </View>
  );
};
