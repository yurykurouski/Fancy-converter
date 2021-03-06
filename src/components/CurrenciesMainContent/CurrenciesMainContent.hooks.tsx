import { useCallback, useEffect, useState } from 'react';
import { Animated, BackHandler, Vibration } from 'react-native';
import { VIBRATION_DURATION } from 'constants/constants';
import { getScreenWidth } from 'utils';

import {
  UseHandleBackPress,
  UseOpenDrawerAnimations,
} from './CurrenciesMainContent.types';

const screenWidth = getScreenWidth();
const animatedPosition = new Animated.Value(-(screenWidth * 0.6));

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
        toValue: -(screenWidth * 0.6),
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
