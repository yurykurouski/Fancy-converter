import React from 'react';
import { Text, View } from 'react-native';
import AppIcon from 'assets/icons/icon_svg.svg';
import { SCREEN_WIDTH } from 'constants/constants';
import { l } from 'resources/localization';

import { screenStyles } from './FirstScreen.styles';
import { useCommonOnboardingStyles } from 'components/Onboarding/Onboarding.styles';

export const FirstScreen = () => {
  const styles = useCommonOnboardingStyles();

  const screenTitle = l['onboarding_first-screen'];

  return (
    <View style={{ width: SCREEN_WIDTH }}>
      <View style={screenStyles.iconBack}>
        <AppIcon width="160" height="160" style={screenStyles.appIcon} />
      </View>
      <Text style={[styles.mainText, styles.title]}>{screenTitle}</Text>
    </View>
  );
};
