import React from 'react';
import { View } from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { LightIconRays } from 'assets/icons';

import { useStyles } from './LightIcon.styles';

type TRops = {
  animatedValue: SharedValue<number>;
};

export const LightIcon = ({ animatedValue }: TRops) => {
  const styles = useStyles();

  const animatedRays = useAnimatedStyle(() => {
    const value = interpolate(animatedValue.value, [0, 135], [0, 1]);

    return {
      transform: [
        {
          rotate: `${animatedValue.value}deg`,
        },
        { scale: value },
      ],
    };
  });

  const opacityStyle = useAnimatedStyle(() => {
    const value = interpolate(animatedValue.value, [0, 135], [0, 1]);

    return {
      opacity: value,
    };
  });

  return (
    <Animated.View style={[styles.container, opacityStyle]}>
      <AnimatedIcon style={[styles.rays, animatedRays]} />
      <View style={styles.core} />
    </Animated.View>
  );
};

const AnimatedIcon = Animated.createAnimatedComponent(LightIconRays);
