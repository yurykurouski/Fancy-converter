import React from 'react';
import { Pressable, View } from 'react-native';

import { DarkIcon } from './DarkIcon';
import {
  useHandlePress,
  useThemeSwitcherAnimations,
} from './DrawerThemeSwitcher.hooks';
import { DrawerThemeSwitcher as Props } from './DrawerThemeSwitcher.types';
import { LightIcon } from './LightIcon';

import { styles } from './DrawerThemeSwitcher.styles';

export const DrawerThemeSwitcher: Props = ({ colorScheme, setColorScheme }) => {
  const { container } = styles;

  const { animateThemeSwitcher } = useThemeSwitcherAnimations();

  const handlePress = useHandlePress(
    colorScheme,
    setColorScheme,
    animateThemeSwitcher,
  );

  return (
    <Pressable onPress={handlePress}>
      <View style={container}>
        <LightIcon />
        <DarkIcon />
      </View>
    </Pressable>
  );
};
