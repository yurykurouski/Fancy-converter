import React from 'react';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { DarkIconMoon, DarkIconStars } from 'assets/icons';

import { styles } from './DarkIcon.styles';

type TProps = {
  animatedValue: SharedValue<number>;
};

export const DarkIcon = ({ animatedValue }: TProps) => {
  const animatedContainerStyle = useAnimatedStyle(() => {
    const value = interpolate(animatedValue.value, [0, 135], [1, 0]);

    return {
      transform: [{ rotate: `${animatedValue.value}deg` }],
      opacity: value,
    };
  });

  const animatedStarStyle = useAnimatedStyle(() => {
    const value = interpolate(animatedValue.value, [0, 135], [1, 0]);

    return {
      transform: [{ scale: value }],
    };
  });

  return (
    <>
      <AnimatedDarkIconMoon style={[styles.moon, animatedContainerStyle]} />
      <AnimatedDarkIconStars
        size={12}
        style={[styles.stars, animatedStarStyle]}
      />
    </>
  );
};

const AnimatedDarkIconStars = Animated.createAnimatedComponent(DarkIconStars);
const AnimatedDarkIconMoon = Animated.createAnimatedComponent(DarkIconMoon);
