import { Gesture } from 'react-native-gesture-handler';
import {
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { DEFAULT_ANIMATION_DURATION } from 'constants/constants';
import { useSetDrawerStatus } from 'hooks';

import { DRAWER_CONTENT_WIDTH } from './Drawer.constants';

export const usePanGesture = (animatedPosition: SharedValue<number>) => {
  const setIsDrawerOpened = useSetDrawerStatus();

  return Gesture.Pan()
    .onUpdate(nativeEvent => {
      const { translationX } = nativeEvent;

      if (translationX > 0) {
        return;
      }

      animatedPosition.value = translationX;
    })
    .onEnd(nativeEvent => {
      const { translationX, velocityX } = nativeEvent;

      if (translationX < -80 || velocityX < -800) {
        animatedPosition.value = withTiming(-DRAWER_CONTENT_WIDTH, {
          duration: DEFAULT_ANIMATION_DURATION,
        });

        runOnJS(setIsDrawerOpened)(false);
      } else {
        animatedPosition.value = withTiming(0, {
          duration: DEFAULT_ANIMATION_DURATION,
        });
      }
    });
};

export const useDrawerAnimatedStyles = (
  animatedPosition: SharedValue<number>,
) =>
  useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animatedPosition.value }],
    };
  });

export const useDrawerBlurAnimatedStyles = (
  animatedPosition: SharedValue<number>,
) =>
  useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedPosition.value,
      [-DRAWER_CONTENT_WIDTH, 0],
      [0, 1],
    ),
  }));
