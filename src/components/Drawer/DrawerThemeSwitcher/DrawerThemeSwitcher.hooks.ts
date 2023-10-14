import { useCallback } from 'react';
import { Animated, ColorSchemeName, Easing } from 'react-native';
import { getCurrentColorTheme } from 'utils/getCurrentColorTheme';

import {
  ANIMATED_OPACITY_DARK,
  ANIMATED_OPACITY_LIGHT,
  ANIMATED_RAYS_SCALE,
  ANIMATED_ROTATE,
  ANIMATED_SCALE,
  ANIMATED_STARS_SCALE,
} from './DrawerThemeSwitcher.consts';
import {
  UseHandlePress,
  UseThemeSwitcherAnimations,
} from './DrawerThemeSwitcher.types';

if (getCurrentColorTheme() === 'light') {
  ANIMATED_OPACITY_LIGHT.setValue(0);
  ANIMATED_OPACITY_DARK.setValue(1);

  ANIMATED_ROTATE.setValue(0);

  ANIMATED_RAYS_SCALE.setValue(0.5);
  ANIMATED_STARS_SCALE.setValue(1);
} else {
  ANIMATED_OPACITY_LIGHT.setValue(1);
  ANIMATED_OPACITY_DARK.setValue(0);

  ANIMATED_ROTATE.setValue(-135);

  ANIMATED_RAYS_SCALE.setValue(1);
  ANIMATED_STARS_SCALE.setValue(0.5);
}

export const useThemeSwitcherAnimations: UseThemeSwitcherAnimations = () => {
  const animateThemeSwitcher = (colorScheme: ColorSchemeName) =>
    Animated.parallel([
      Animated.timing(ANIMATED_ROTATE, {
        toValue: colorScheme !== 'light' ? -135 : 0,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.elastic(1),
      }),
      Animated.timing(ANIMATED_OPACITY_LIGHT, {
        toValue: colorScheme !== 'light' ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.elastic(1),
      }),
      Animated.timing(ANIMATED_OPACITY_DARK, {
        toValue: colorScheme !== 'light' ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(ANIMATED_RAYS_SCALE, {
        toValue: colorScheme !== 'light' ? 1 : 0.5,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.elastic(1),
      }),
      Animated.timing(ANIMATED_STARS_SCALE, {
        toValue: colorScheme !== 'light' ? 0.5 : 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.elastic(1),
      }),
      Animated.sequence([
        Animated.timing(ANIMATED_SCALE, {
          toValue: 0.9,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(ANIMATED_SCALE, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

  return {
    animateThemeSwitcher,
  };
};

export const useHandlePress: UseHandlePress = setColorScheme =>
  useCallback(() => {
    setColorScheme();
  }, [setColorScheme]);
