import React from 'react';
import { Animated } from 'react-native';
import moonCore from 'assets/icons/dark_mode/moon_core.png';
import moonStars from 'assets/icons/dark_mode/moon_stars.png';

import {
  ANIMATED_OPACITY_DARK,
  ANIMATED_ROTATE,
  ANIMATED_SCALE,
  ANIMATED_STARS_SCALE,
} from '../DrawerThemeSwitcher.consts';

import { styles } from './DarkIcon.styles';

export const DarkIcon = () => {
  const { stars, moon } = styles;
  return (
    <>
      <Animated.Image
        style={[
          moon,
          {
            transform: [
              {
                rotate: ANIMATED_ROTATE.interpolate({
                  inputRange: [0, 135],
                  outputRange: ['0deg', '135deg'],
                }),
              },
              { scale: ANIMATED_SCALE },
            ],
          },
          { opacity: ANIMATED_OPACITY_DARK },
          { resizeMode: 'cover', position: 'absolute' },
        ]}
        source={moonCore}
      />
      <Animated.Image
        style={[
          stars,
          { transform: [{ scale: ANIMATED_STARS_SCALE }] },
          { opacity: ANIMATED_OPACITY_DARK },
          { resizeMode: 'cover', position: 'absolute' },
        ]}
        source={moonStars}
      />
    </>
  );
};
