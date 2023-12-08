import { Animated } from 'react-native';

const ANIMATED_OFFSET = new Animated.Value(0);
const RIPPLE_SCALE_VALUE = new Animated.Value(0);

export const useAnimationStyles = () => ({
  selectorContainerStyle: {
    transform: [{ translateX: ANIMATED_OFFSET }],
  },
  animatedRippleStyle: {
    transform: [
      {
        scale: RIPPLE_SCALE_VALUE,
      },
    ],
  },
});

//NOTE: dead
export const useSwipeAnimation = () => () =>
  Animated.sequence([
    Animated.parallel([
      Animated.timing(RIPPLE_SCALE_VALUE, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]),
    Animated.delay(100),
    Animated.timing(ANIMATED_OFFSET, {
      toValue: 60,
      duration: 400,
      useNativeDriver: true,
    }),
    Animated.delay(100),
    Animated.parallel([
      Animated.timing(RIPPLE_SCALE_VALUE, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]),
    Animated.delay(2000),
    Animated.parallel([
      Animated.timing(RIPPLE_SCALE_VALUE, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]),
    Animated.delay(100),
    Animated.timing(ANIMATED_OFFSET, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }),
    Animated.delay(100),
    Animated.parallel([
      Animated.timing(RIPPLE_SCALE_VALUE, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]),
  ]).start();
