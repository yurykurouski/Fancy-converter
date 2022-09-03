import React from 'react';
import { Animated, Text } from 'react-native';
import { SCREEN_WIDTH } from 'constants/constants';

import { useStyles } from '../../../../Onboarding';

export const SecondScreen = () => {
  const styles = useStyles();
  return (
    <Animated.View style={{ width: SCREEN_WIDTH }}>
      <Text style={[styles.mainText, styles.title]}>
        HEY!{'\n'}
        Let's take a brief overview
      </Text>
    </Animated.View>
  );
};
