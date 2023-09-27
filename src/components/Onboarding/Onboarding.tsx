import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';

import { ONBOARDING_SCREENS } from './Onboarding.consts';
import { useOnboardingHandlers } from './Onboarding.hooks';
import { OnboardingNavigation } from './OnboardingNavigation';

import { useStyles } from './Onboarding.styles';

export const Onboarding = () => {
  const flatListRef = useRef<FlatList>(null);

  const styles = useStyles();

  const { currentPage, handleScroll, handleEndDrag, handleStartDrag } =
    useOnboardingHandlers(flatListRef);

  return (
    <View style={styles.contentContainer}>
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_SCREENS}
        renderItem={({ item }) => item}
        onScroll={handleScroll}
        onScrollEndDrag={handleEndDrag}
        onScrollBeginDrag={handleStartDrag}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        overScrollMode="never"
        horizontal
      />
      <OnboardingNavigation
        currentPage={currentPage}
        flatListRef={flatListRef}
      />
    </View>
  );
};
