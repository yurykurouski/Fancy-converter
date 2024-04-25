import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppState } from 'hooks';
import { useIsHasIsland } from 'hooks/useHasIsland';
import { l } from 'resources/localization';
import { uiStore } from 'store/uiStore/uiStore';
import { triggerLongPressHaptic } from 'utils';
import { useSnapshot } from 'valtio';

import { useStyles } from './WithNotificationHOC.styles';

import { showNotification } from 'HOC/WithNotificationHOC/notification-animations';

export const WithNotificationHOC = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const styles = useStyles();
  const { top } = useSafeAreaInsets();

  const animatedValue = useSharedValue(0);

  const { notificationData } = useSnapshot(uiStore);

  const appState = useAppState();
  const opacity = appState === 'inactive' ? 0 : 1;

  const hasIsland = useIsHasIsland();

  const animatedStyles = useAnimatedStyle(() => {
    const interpolatedScale = interpolate(
      animatedValue.value,
      [0, hasIsland ? top : top + 38],
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
      showNotification(animatedValue, hasIsland, top);
      triggerLongPressHaptic();
    }
  }, [animatedValue, hasIsland, notificationData?.timeStamp, top]);

  return (
    <>
      {children}
      {notificationData?.type && (
        <Animated.View
          style={[
            styles.container,
            hasIsland && { opacity } && styles.withIslandContainer,
            animatedStyles,
          ]}>
          <Text style={styles.text}>
            {`${notificationData?.data ?? ''} ${l[notificationData?.type]}`}
          </Text>
        </Animated.View>
      )}
    </>
  );
};
