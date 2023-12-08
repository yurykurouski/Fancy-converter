import { Animated } from 'react-native';

export type Props = {
  isSelected: boolean;
  withRipple?: boolean;
  animatedHandleColorStyle?: {
    backgroundColor: Animated.AnimatedInterpolation<string | number>;
  };
  animatedRippleStyle?: {
    transform: {
      scale: Animated.Value;
    }[];
  };
};
