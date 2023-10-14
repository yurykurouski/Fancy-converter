import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { EColorSchemeBehavior } from 'types';

import { DarkIcon } from './DarkIcon';
import {
  useHandlePress,
  useThemeSwitcherAnimations,
} from './DrawerThemeSwitcher.hooks';
import { TDrawerThemeSwitcherProps } from './DrawerThemeSwitcher.types';
import { LightIcon } from './LightIcon';

import { useStyles } from './DrawerThemeSwitcher.styles';

export const DrawerThemeSwitcher: TDrawerThemeSwitcherProps = ({
  colorScheme,
  setColorScheme,
  schemeBehavior,
}) => {
  const styles = useStyles();

  const { animateThemeSwitcher } = useThemeSwitcherAnimations();

  const handlePress = useHandlePress(setColorScheme);

  useEffect(() => {
    animateThemeSwitcher(colorScheme);
  }, [animateThemeSwitcher, colorScheme]);

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <LightIcon />
      <DarkIcon />
      {schemeBehavior === EColorSchemeBehavior.AUTO && (
        <Text style={styles.behaviorIndicator}>A</Text>
      )}
    </Pressable>
  );
};
