import {
  interpolate,
  SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { DEFAULT_ANIMATION_DURATION } from 'constants/index';

export const useAnimatedIndicatorStyle = (
  translationY: SharedValue<number>,
  translationX: SharedValue<number>,
  totalHeight: number,
) => {
  const indicatorStyle = useAnimatedStyle(() => {
    const offset = interpolate(translationY.value, [0, totalHeight], [0, 36]);

    return {
      transform: [
        {
          translateY: offset,
        },
      ],
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translationX.value,
        },
      ],
    };
  });

  return { indicatorStyle, containerStyle };
};

export const useReactAnimated = (
  indicatorState: SharedValue<number>,
  translationX: SharedValue<number>,
) =>
  useAnimatedReaction(
    () => {
      return indicatorState.value;
    },
    (result, previous) => {
      if (result !== previous) {
        translationX.value = withSequence(
          withTiming(10, {
            duration: DEFAULT_ANIMATION_DURATION,
          }),
          withDelay(
            1500,
            withTiming(0, {
              duration: DEFAULT_ANIMATION_DURATION,
            }),
          ),
        );
      }
    },
    [],
  );
