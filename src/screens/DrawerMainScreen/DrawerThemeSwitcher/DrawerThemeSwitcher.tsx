import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import {
  setThemePreference,
  useThemePreference,
} from '@vonovak/react-native-theme-control';
import switchTheme from 'react-native-theme-switch-animation';
import { DEFAULT_ANIMATION_DURATION } from 'constants';
import { colorSchemeActions } from 'store/colorSchemeStore';
import { EColorSchemeBehavior } from 'types';

import { DarkIcon } from './DarkIcon';
import { LightIcon } from './LightIcon';

import { useStyles } from './DrawerThemeSwitcher.styles';

export const DrawerThemeSwitcher = React.memo(() => {
  const styles = useStyles();

  const colorScheme = useThemePreference();

  const onPress = useCallback(() => {
    setThemePreference(colorScheme === 'dark' ? 'light' : 'dark', {
      persistTheme: true,
      //TODO: handle restarting
      // restartActivity: true,
    });
    colorSchemeActions.setAppearanceBehavior(EColorSchemeBehavior.MANUAL);
  }, [colorScheme]);

  return (
    <Pressable
      style={styles.container}
      onPress={e => {
        e.currentTarget.measure((_, __, width, height, px, py) => {
          switchTheme({
            switchThemeFunction: onPress,
            animationConfig: {
              type: colorScheme === 'dark' ? 'circular' : 'inverted-circular',
              duration: DEFAULT_ANIMATION_DURATION * 2,
              startingPoint: {
                cy: py + height / 2,
                cx: px + width / 2,
              },
            },
          });
        });
      }}>
      {colorScheme === 'dark' ? <LightIcon /> : <DarkIcon />}

      {/* {behavior === EColorSchemeBehavior.AUTO && (
        <Animated.Text
          style={styles.behaviorIndicator}
          entering={FadeIn.duration(DEFAULT_ANIMATION_DURATION)}
          exiting={FadeOut.duration(DEFAULT_ANIMATION_DURATION)}>
          A
        </Animated.Text>
      )} */}
    </Pressable>
  );
});
