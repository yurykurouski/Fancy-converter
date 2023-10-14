import React from 'react';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import moonCore from 'assets/icons/dark_mode/moon_core.png';
import moonStars from 'assets/icons/dark_mode/moon_stars.png';

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
      <Animated.Image
        style={[styles.moon, animatedContainerStyle]}
        source={moonCore}
      />
      <Animated.Image
        style={[styles.stars, animatedStarStyle]}
        source={moonStars}
      />
    </>
  );
};
