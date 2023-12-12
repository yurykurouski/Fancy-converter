import React, { useState } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { useWindowDimensionChange } from 'hooks';
import { EDimensions } from 'types';

import { ONBOARDING_SCREENS } from './Onboarding.consts';
import { useHandleOnboardingScroll } from './Onboarding.hooks';
import { OnboardingNavigation } from './OnboardingNavigation';

import { useStyles } from './Onboarding.styles';

export const Onboarding = () => {
  //NOTE: for cases if window size is changing during onboarding
  const windowWidth = useWindowDimensionChange(EDimensions.WIDTH);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollListRef = useAnimatedRef<Animated.ScrollView>();

  const styles = useStyles();

  const handleScroll = useHandleOnboardingScroll(
    currentPage,
    setCurrentPage,
    windowWidth,
  );

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
          <Component
            windowWidth={windowWidth}
            key={i}
            currentPage={currentPage}
          />
        ))}
      </Animated.ScrollView>
      <OnboardingNavigation
        currentPage={currentPage}
        scrollListRef={scrollListRef}
      />
    </View>
  );
};
