import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  ReduceMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { DEFAULT_ANIMATION_DURATION } from 'constants';
import throttle from 'lodash/throttle';
import {
  colorSchemeActions,
  colorSchemeStore,
} from 'store/valtio/colorSchemeStore';
import { EColorSchemeBehavior } from 'types';
import { useSnapshot } from 'valtio';

import { DarkIcon } from './DarkIcon';
import { LightIcon } from './LightIcon';

import { useStyles } from './DrawerThemeSwitcher.styles';

export const DrawerThemeSwitcher = React.memo(() => {
  const styles = useStyles();

  const { colorScheme, behavior } = useSnapshot(colorSchemeStore);

  const animatedValue = useSharedValue(colorScheme !== 'dark' ? 0 : 135);

  const onPress = throttle(() => {
    const toValue = colorScheme === 'dark' ? 0 : 135;

    animatedValue.value = withSpring(toValue, {
      dampingRatio: 0.7,
      reduceMotion: ReduceMotion.System,
    });

    colorSchemeActions.switchColorScheme(EColorSchemeBehavior.MANUAL);
  }, 500);

  useEffect(() => {
    if (behavior === EColorSchemeBehavior.AUTO) {
      const toValue = colorScheme === 'dark' ? 135 : 0;

      animatedValue.value = withSpring(toValue, {
        dampingRatio: 0.7,
        reduceMotion: ReduceMotion.System,
      });
    }
  }, [animatedValue, behavior, colorScheme]);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <LightIcon animatedValue={animatedValue} />
      <DarkIcon animatedValue={animatedValue} />
      {behavior === EColorSchemeBehavior.AUTO && (
        <Animated.Text
          style={styles.behaviorIndicator}
          entering={FadeIn.duration(DEFAULT_ANIMATION_DURATION)}
          exiting={FadeOut.duration(DEFAULT_ANIMATION_DURATION)}>
          A
        </Animated.Text>
      )}
    </Pressable>
  );
});
