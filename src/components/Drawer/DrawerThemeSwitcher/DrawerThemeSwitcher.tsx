import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import {
  ReduceMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { EColorSchemeBehavior } from 'types';

import { DarkIcon } from './DarkIcon';
import { TDrawerThemeSwitcherProps } from './DrawerThemeSwitcher.types';
import { LightIcon } from './LightIcon';

import { useStyles } from './DrawerThemeSwitcher.styles';

export const DrawerThemeSwitcher: TDrawerThemeSwitcherProps = ({
  colorScheme,
  setColorScheme,
  schemeBehavior,
}) => {
  const styles = useStyles();

  const animatedValue = useSharedValue(0);

  useEffect(() => {
    const toValue = colorScheme === 'dark' ? 135 : 0;

    animatedValue.value = withSpring(toValue, {
      dampingRatio: 0.7,
      reduceMotion: ReduceMotion.System,
    });
  }, [animatedValue, colorScheme]);

  return (
    <Pressable onPress={setColorScheme} style={styles.container}>
      <LightIcon animatedValue={animatedValue} />
      <DarkIcon animatedValue={animatedValue} />
      {schemeBehavior === EColorSchemeBehavior.AUTO && (
        <Text style={styles.behaviorIndicator}>A</Text>
      )}
    </Pressable>
  );
};
