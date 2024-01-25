import React from 'react';
import { Text, View } from 'react-native';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { l } from 'resources/localization';

import { ProgressBar } from '../components';
import { ONBOARDING_SCREENS } from '../Onboarding.consts';

import {
  useHandleOnboardingNextPress,
  useHandleOnboardingSkip,
} from './OnboardingNavigation.hooks';
import { Props } from './OnboardingNavigation.types';

import { useStyles } from './OnboardingNavigation.styles';

export const OnboardingNavigation = ({ currentPage, scrollListRef }: Props) => {
  const styles = useStyles();

  const handleNextPress = useHandleOnboardingNextPress({
    currentPage,
    scrollListRef,
  });

  const handleSkip = useHandleOnboardingSkip(scrollListRef);

  const rightButtonText =
    currentPage === ONBOARDING_SCREENS.length - 1
      ? l.onboarding_navigation_done
      : l.onboarding_navigation_next;

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.wrapper}>
        <ButtonWithIPadOSInteraction
          containerStyle={styles.navigationBtn}
          onPress={handleSkip}>
          <Text style={styles.mainText}>{l.onboarding_navigation_skip}</Text>
        </ButtonWithIPadOSInteraction>
        <ProgressBar activeIndex={currentPage} />
        <ButtonWithIPadOSInteraction
          containerStyle={styles.navigationBtn}
          onPress={handleNextPress}>
          <Text style={styles.mainText}>{rightButtonText}</Text>
        </ButtonWithIPadOSInteraction>
      </View>
    </View>
  );
};
