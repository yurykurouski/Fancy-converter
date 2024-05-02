import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, {
  interpolate,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DEFAULT_ANIMATION_DURATION } from 'constants';
import { useAppStateV2 } from 'hooks/useAppState';
import { useIsHasIsland } from 'hooks/useHasIsland';
import { uiStore } from 'store/uiStore/uiStore';
import { ENotificationType } from 'types';
import { triggerLongPressHaptic } from 'utils';
import { useProxy } from 'valtio/utils';

import { showNotification } from './notification-animations';

import { useStyles } from './NotificationMessage.styles';

export const NotificationMessage = () => {
  const styles = useStyles();
  const { top } = useSafeAreaInsets();

  const animatedValue = useSharedValue(0);

  const { notificationData } = useProxy(uiStore);

  const appState = useAppStateV2();
  const opacity = appState === 'inactive' ? 0 : 1;

  const hasIsland = useIsHasIsland();

  const animatedStyles = useAnimatedStyle(() => {
    const interpolatedScale = interpolate(animatedValue.value, [0, 46], [0, 1]);

    return {
      transform: [
        {
          translateY: animatedValue.value,
        },
      ],
      opacity: interpolatedScale,
    };
  });

  useEffect(() => {
    if (notificationData?.timeStamp) {
      showNotification(animatedValue, hasIsland, top);
      triggerLongPressHaptic();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animatedValue, hasIsland, notificationData?.timeStamp]);

  return (
    <Animated.View
      layout={LinearTransition.duration(DEFAULT_ANIMATION_DURATION)}
      style={[
        styles.container,
        styles[notificationData?.type ?? ENotificationType.MESSAGE],
        hasIsland && { opacity } && styles.withIslandContainer,
        animatedStyles,
      ]}>
      <Text style={styles.text}>{`${notificationData?.message}`}</Text>
    </Animated.View>
  );
};
