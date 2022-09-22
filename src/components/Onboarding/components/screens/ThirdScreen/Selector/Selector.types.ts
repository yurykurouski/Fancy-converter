import { Animated } from 'react-native';

export type Props = {
  withRipple?: boolean;
  animatedHandleColorStyle?: {
    backgroundColor: Animated.AnimatedInterpolation;
  };
  animatedRippleStyle?: {
    transform: {
      scale: Animated.Value;
    }[];
  };
};
