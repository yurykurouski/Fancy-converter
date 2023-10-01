import { useCallback, useEffect } from 'react';
import { BackHandler, Keyboard, Vibration } from 'react-native';
import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { DRAWER_CONTENT_WIDTH } from 'components/Drawer/Drawer.constants';
import {
  DEFAULT_ANIMATION_DURATION,
  VIBRATION_DURATION,
} from 'constants/constants';
import { useSetDrawerStatus } from 'hooks';
import {
  useClearSelectedCurrenciesInEdit,
  useSetSelectedCurrEditMode,
} from 'hooks/store/SelectedCurrencies';
import { selectDrawerOpenStatus } from 'store/drawer/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';

import {
  TUseHandleBackPress,
  TUseOpenDrawerAnimations,
} from './CurrenciesMainContent.types';

export const useOpenDrawerAnimations: TUseOpenDrawerAnimations = () => {
  const setIsDrawerOpened = useSetDrawerStatus();

  const animatedPosition = useSharedValue(-DRAWER_CONTENT_WIDTH);

  const closeDrawer = useCallback(() => {
    animatedPosition.value = withTiming(-DRAWER_CONTENT_WIDTH, {
      duration: DEFAULT_ANIMATION_DURATION,
    });

    setIsDrawerOpened(false);
  }, [animatedPosition, setIsDrawerOpened]);

  const openDrawer = useCallback(() => {
    Vibration.vibrate(VIBRATION_DURATION);
    Keyboard.dismiss();

    animatedPosition.value = withTiming(0, {
      duration: DEFAULT_ANIMATION_DURATION,
    });

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
  const { isInEditMode } = useSelector(selectSelectedCurrencies);

  const clearSelectedCurrenciesInEdit = useClearSelectedCurrenciesInEdit();
  const setSelectedCurrInEditMode = useSetSelectedCurrEditMode();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isInEditMode) {
          setSelectedCurrInEditMode(false);
          clearSelectedCurrenciesInEdit(undefined);
          return true;
        }

        if (isDrawerOpened) {
          closeDrawer();
          return true;
        }
        return false;
      },
    );

    return () => backHandler.remove();
  }, [
    isDrawerOpened,
    closeDrawer,
    isInEditMode,
    clearSelectedCurrenciesInEdit,
    setSelectedCurrInEditMode,
  ]);
};
