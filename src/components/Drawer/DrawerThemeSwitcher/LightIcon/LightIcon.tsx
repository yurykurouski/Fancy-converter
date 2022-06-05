import React from 'react';
import { Animated } from 'react-native';
import sunCore from 'assets/icons/light_mode/sun_core.png';
import sunRaysIcon from 'assets/icons/light_mode/sun_rays.png';

import {
  ANIMATED_OPACITY_LIGHT,
  ANIMATED_RAYS_SCALE,
  ANIMATED_ROTATE,
} from '../DrawerThemeSwitcher.consts';

import { styles } from './LightIcon.styles';

export const LightIcon = () => {
  const { core, rays } = styles;

  return (
    <>
      <Animated.Image
        style={[
          rays,
          {
            transform: [
              {
                rotate: ANIMATED_ROTATE.interpolate({
                  inputRange: [0, 135],
                  outputRange: ['0deg', '135deg'],
                }),
              },
              { scale: ANIMATED_RAYS_SCALE },
            ],
          },
          { opacity: ANIMATED_OPACITY_LIGHT },
          {
            resizeMode: 'cover',
            position: 'absolute',
          },
        ]}
        source={sunRaysIcon}
      />
      <Animated.Image
        style={[core, { opacity: ANIMATED_OPACITY_LIGHT }]}
        source={sunCore}
      />
    </>
  );
};
