import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { ProgressBar } from '../components';
import { ONBOARDING_SCREENS } from '../Onboarding.consts';

import { useNavigationHandlers } from './OnboardingNavigation.hooks';
import { Props } from './OnboardingNavigation.types';

import { useStyles } from './OnboardingNavigation.styles';

export const OnboardingNavigation = ({ currentPage, flatListRef }: Props) => {
  const styles = useStyles();

  const { handleNextPress, handleSkip } = useNavigationHandlers({
    currentPage,
    flatListRef,
  });

  const rightButtonText =
    currentPage === ONBOARDING_SCREENS.length - 1 ? 'Done' : 'Next';

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.wrapper}>
        <Pressable
          onPress={handleSkip}
          android_ripple={{ borderless: true, foreground: true }}
          style={styles.navigationBtn}>
          <Text style={styles.mainText}>Skip</Text>
        </Pressable>
        <ProgressBar activeIndex={currentPage} />
        <Pressable
          android_ripple={{ borderless: true, foreground: true }}
          style={styles.navigationBtn}
          onPress={handleNextPress}>
          <Text style={styles.mainText}>{rightButtonText}</Text>
        </Pressable>
      </View>
    </View>
  );
};
