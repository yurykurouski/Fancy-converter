import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import {
  ReduceMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { useSwitchColorScheme } from 'hooks/store/UIStatus';
import { selectColorSchemeState } from 'store/ui/selectors';
import { EColorSchemeBehavior } from 'types';

import { DarkIcon } from './DarkIcon';
import { LightIcon } from './LightIcon';

import { useStyles } from './DrawerThemeSwitcher.styles';

export const DrawerThemeSwitcher = () => {
  const styles = useStyles();

  const { colorScheme, behavior } = useSelector(selectColorSchemeState);

  const switchColorScheme = useSwitchColorScheme();

  const animatedValue = useSharedValue(0);

  const handlePress = () => switchColorScheme(EColorSchemeBehavior.MANUAL);

  useEffect(() => {
    const toValue = colorScheme === 'dark' ? 135 : 0;

    animatedValue.value = withSpring(toValue, {
      dampingRatio: 0.7,
      reduceMotion: ReduceMotion.System,
    });
  }, [animatedValue, colorScheme]);

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <LightIcon animatedValue={animatedValue} />
      <DarkIcon animatedValue={animatedValue} />
      {behavior === EColorSchemeBehavior.AUTO && (
        <Text style={styles.behaviorIndicator}>A</Text>
      )}
    </Pressable>
  );
};
