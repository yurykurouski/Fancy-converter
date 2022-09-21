import React from 'react';
import { Text, View } from 'react-native';
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import { l } from 'resources/localization';

import { useStyles as useTextStyles } from '../../../../Onboarding';

import { DraggableExample } from './DraggableExample';
import { SwipableExample } from './SwipableExample';

import { styles } from './ThirdScreen.styles';
export const ThirdScreen = () => {
  const textStyles = useTextStyles();

  const screenTitle = l['onboarding_third-screen_title'];
  const screenSubTitleSwipe = l['onboarding_third-screen_subtitle-swipe'];
  const screenSubTitleDrag = l['onboarding_third-screen_subtitle-drag'];

  return (
    <View style={{ width: SCREEN_WIDTH, paddingHorizontal: 10 }}>
      <Text style={[textStyles.mainText, textStyles.title]}>{screenTitle}</Text>
      <Text style={[textStyles.mainText, textStyles.title, styles.subTitle]}>
        {screenSubTitleSwipe}
      </Text>
      <SwipableExample />
      <Text
        style={[textStyles.mainText, textStyles.title, { marginBottom: 20 }]}>
        {screenSubTitleDrag}
      </Text>
      <DraggableExample />
    </View>
  );
};
