import React from 'react';
import { Animated, Text } from 'react-native';
import { useAppState } from '@react-native-community/hooks';
import { useIsHasIsland } from 'hooks/useHasIsland';

import { animatedPosition, animatedWidth } from './notification-animations';

import { useStyles } from './WithNotification.styles';

export const TOP_INSET_WITH_ISLAND = 59;

const Notification = ({ message }: { message: string }) => {
  const styles = useStyles();

  const hasIsland = useIsHasIsland();

  const widthInterpolate = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: [124, 200],
  });

  const appState = useAppState();

  const opacity = appState === 'inactive' ? 0 : 1;

  if (hasIsland) {
    return (
      <Animated.View
        style={[
          styles.container,
          styles.withIslandContainer,
          {
            transform: [{ translateY: animatedPosition }],
          },
          { width: widthInterpolate, opacity },
        ]}>
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    );
  }

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: animatedPosition }] },
      ]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

export default Notification;
