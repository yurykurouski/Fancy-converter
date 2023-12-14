import { useCallback, useMemo } from 'react';
import { Animated } from 'react-native';
import { DEFAULT_ANIMATION_DURATION } from 'constants/index';

export const useChangeDotScale = () => {
  const scaleValue = useMemo(() => new Animated.Value(1), []);

  const changeDotScale = useCallback(
    (isActive: boolean) => {
      isActive
        ? Animated.timing(scaleValue, {
            toValue: 1.9,
            duration: DEFAULT_ANIMATION_DURATION,
            useNativeDriver: true,
          }).start()
        : Animated.timing(scaleValue, {
            toValue: 1,
            duration: DEFAULT_ANIMATION_DURATION,
            useNativeDriver: true,
          }).start();

      // if (isActive) {
      //   Animated.timing(scaleValue, {
      //     toValue: 1.9,
      //     duration: 150,
      //     useNativeDriver: true,
      //   }).start();
      // } else {
      //   Animated.timing(scaleValue, {
      //     toValue: 1,
      //     duration: 150,
      //     useNativeDriver: true,
      //   }).start();
      // }
    },
    [scaleValue],
  );

  return {
    scaleValue,
    changeDotScale,
  };
};
