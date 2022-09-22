import { useCallback, useEffect, useState } from 'react';
import { Animated, BackHandler, Vibration } from 'react-native';
import { SCREEN_WIDTH, VIBRATION_DURATION } from 'constants/constants';

import {
  UseHandleBackPress,
  UseOpenDrawerAnimations,
} from './CurrenciesMainContent.types';

const animatedPosition = new Animated.Value(-(SCREEN_WIDTH * 0.6));

export const useOpenDrawerAnimations: UseOpenDrawerAnimations = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const drawerAnimation = useCallback(() => {
    if (!isDrawerOpened) {
      Vibration.vibrate(VIBRATION_DURATION);

      Animated.timing(animatedPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();

      setIsDrawerOpened(true);
    } else {
      Animated.timing(animatedPosition, {
        toValue: -(SCREEN_WIDTH * 0.6),
        duration: 200,
        useNativeDriver: false,
      }).start();

      setIsDrawerOpened(false);
    }
  }, [isDrawerOpened]);

  return {
    isDrawerOpened,
    drawerAnimation,
    animatedPosition,
  };
};

export const useHandleBackPress: UseHandleBackPress = (
  isDrawerOpened,
  drawerAnimation,
) =>
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isDrawerOpened) {
          drawerAnimation();
          return true;
        }
        return false;
      },
    );

    return () => backHandler.remove();
  }, [isDrawerOpened, drawerAnimation]);
