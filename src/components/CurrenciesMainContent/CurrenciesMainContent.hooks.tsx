import { useCallback, useEffect } from 'react';
import { BackHandler, Vibration } from 'react-native';
import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { DRAWER_CONTENT_WIDTH } from 'components/Drawer/Drawer.constants';
import { VIBRATION_DURATION } from 'constants/constants';
import { useSetDrawerStatus } from 'hooks';
import { selectDrawerOpenStatus } from 'store/drawer/selectors';

import {
  TUseHandleBackPress,
  TUseOpenDrawerAnimations,
} from './CurrenciesMainContent.types';

export const useOpenDrawerAnimations: TUseOpenDrawerAnimations = () => {
  const setIsDrawerOpened = useSetDrawerStatus();

  const animatedPosition = useSharedValue(-DRAWER_CONTENT_WIDTH);

  const closeDrawer = useCallback(() => {
    animatedPosition.value = withTiming(-DRAWER_CONTENT_WIDTH, {
      duration: 150,
    });

    setIsDrawerOpened(false);
  }, [animatedPosition, setIsDrawerOpened]);

  const openDrawer = useCallback(() => {
    Vibration.vibrate(VIBRATION_DURATION);

    animatedPosition.value = withTiming(0, { duration: 150 });

    setIsDrawerOpened(true);
  }, [animatedPosition, setIsDrawerOpened]);

  return {
    animatedPosition,
    closeDrawer,
    openDrawer,
  };
};

export const useAnimatedScreenStyle = (animatedPosition: SharedValue<number>) =>
  useAnimatedStyle(() => {
    const translateX = interpolate(
      animatedPosition.value,
      [-DRAWER_CONTENT_WIDTH, 0],
      [0, 10],
    );

    return {
      transform: [
        {
          translateX: translateX,
        },
      ],
    };
  });

export const useHandleBackPress: TUseHandleBackPress = closeDrawer => {
  const { isDrawerOpened } = useSelector(selectDrawerOpenStatus);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isDrawerOpened) {
          closeDrawer();
          return true;
        }
        return false;
      },
    );

    return () => backHandler.remove();
  }, [isDrawerOpened, closeDrawer]);
};
