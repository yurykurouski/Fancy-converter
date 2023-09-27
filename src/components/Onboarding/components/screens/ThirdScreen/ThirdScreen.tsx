import React from 'react';
import { Text, View } from 'react-native';
import { l } from 'resources/localization';

import { DraggableExample } from './DraggableExample';
import { SwipeableExample } from './SwipeableExample';

import { styles } from './ThirdScreen.styles';
import { useCommonOnboardingStyles } from 'components/Onboarding/Onboarding.styles';

export const ThirdScreen = () => {
  const textStyles = useCommonOnboardingStyles();

  const screenTitle = l['onboarding_third-screen_title'];
  const screenSubTitleSwipe = l['onboarding_third-screen_subtitle-swipe'];
  const screenSubTitleDrag = l['onboarding_third-screen_subtitle-drag'];

  return (
    <View style={styles.container}>
      <Text style={[textStyles.mainText, textStyles.title]}>{screenTitle}</Text>
      <Text style={[textStyles.mainText, textStyles.title, styles.subTitle]}>
        {screenSubTitleSwipe}
      </Text>
      <SwipeableExample />
      <Text
        style={[textStyles.mainText, textStyles.title, styles.subTitleDrag]}>
        {screenSubTitleDrag}
      </Text>
      <DraggableExample />
    </View>
  );
};
