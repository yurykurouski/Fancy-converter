import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useAppState } from '@react-native-community/hooks';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { useIsHasIsland } from 'hooks/useHasIsland';
import { l } from 'resources/localization';
import { selectUIStatus } from 'store/ui/selectors';

import { useStyles } from './WithNotificationHOC.styles';

import { showNotification } from 'HOC/WithNotificationHOC/notification-animations';

export const WithNotificationHOC = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const styles = useStyles();

  const animatedValue = useSharedValue(0);

  const { notificationData } = useSelector(selectUIStatus);

  const message = `${notificationData?.data ?? ''} ${
    l[notificationData?.type]
  }`;

  const appState = useAppState();
  const opacity = appState === 'inactive' ? 0 : 1;

  const hasIsland = useIsHasIsland();

  const animatedStyles = useAnimatedStyle(() => {
    const interpolatedScale = interpolate(
      animatedValue.value,
      [0, hasIsland ? 46 : 58],
      [0.3, 1],
    );

    return {
      transform: [
        {
          translateY: animatedValue.value,
        },
        { scaleX: interpolatedScale },
      ],
    };
  });

  useEffect(() => {
    if (notificationData?.timeStamp) {
      showNotification(animatedValue, hasIsland);
    }
  }, [animatedValue, hasIsland, notificationData?.timeStamp]);

  return (
    <>
      {children}
      <Animated.View
        style={[
          styles.container,
          hasIsland && { opacity } && styles.withIslandContainer,
          animatedStyles,
        ]}>
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    </>
  );
};
