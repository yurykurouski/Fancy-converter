import React from 'react';
import { Text } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import AppIcon from 'assets/icons/icon_svg.svg';
import { l } from 'resources/localization';

import { useScreenStyles } from './FirstScreen.styles';
import { useCommonOnboardingStyles } from 'components/Onboarding/Onboarding.styles';

export const FirstScreen = ({ windowWidth }: { windowWidth: number }) => {
  const styles = useCommonOnboardingStyles();
  const screenStyles = useScreenStyles(windowWidth);

  const screenTitle = l['onboarding_first-screen'];

  return (
    <Animated.View style={screenStyles.container} layout={FadeInUp}>
      <AppIcon width="160" height="160" style={screenStyles.appIcon} />
      <Text style={[styles.mainText, styles.title]}>{screenTitle}</Text>
    </Animated.View>
  );
};
