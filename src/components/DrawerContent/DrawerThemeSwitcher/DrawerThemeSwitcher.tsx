import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  ReduceMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { EColorSchemeBehavior } from 'types';

import { DarkIcon } from './DarkIcon';
import { LightIcon } from './LightIcon';

import { useStyles } from './DrawerThemeSwitcher.styles';

export const DrawerThemeSwitcher = () => {
  const styles = useStyles();

  const { colorScheme, behavior } = useSelector(selectColorSchemeState);

  const animatedValue = useSharedValue(0);

  useEffect(() => {
    const toValue = colorScheme === 'dark' ? 135 : 0;

    animatedValue.value = withSpring(toValue, {
      dampingRatio: 0.7,
      reduceMotion: ReduceMotion.System,
    });
  }, [animatedValue, colorScheme]);

  return (
    <View style={styles.container}>
      <LightIcon animatedValue={animatedValue} />
      <DarkIcon animatedValue={animatedValue} />
      {behavior === EColorSchemeBehavior.AUTO && (
        <Text style={styles.behaviorIndicator}>A</Text>
      )}
    </View>
  );
};
