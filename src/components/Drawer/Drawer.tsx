import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectDrawerOpenStatus } from 'store/drawer/selectors';
import { isIos } from 'utils';

import {
  useDrawerAnimatedStyles,
  useDrawerBlurAnimatedStyles,
  usePanGesture,
} from './Drawer.hooks';
import { TProps } from './Drawer.types';
import { DrawerContent } from './DrawerContent';

import { useStyles } from './Drawer.styles';

export const Drawer = React.memo<TProps>(
  ({ animatedPosition, closeDrawer }) => {
    const styles = useStyles();

    const { isDrawerOpened } = useSelector(selectDrawerOpenStatus);
    const { colorScheme } = useSelector(selectColorSchemeState);

    const panGesture = usePanGesture(animatedPosition);

    const animatedStyles = useDrawerAnimatedStyles(animatedPosition);
    const animatedOpacity = useDrawerBlurAnimatedStyles(animatedPosition);

    return (
      <>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.drawer, animatedStyles]}>
            <DrawerContent />
          </Animated.View>
        </GestureDetector>
        {isDrawerOpened && (
          <Animated.View style={[styles.fadeContainer, animatedOpacity]}>
            <BlurView
              style={styles.fade}
              reducedTransparencyFallbackColor={
                THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
              }
              blurType={colorScheme!}
              blurRadius={isIos ? 10 : 4}
              pointerEvents={isDrawerOpened ? 'box-none' : 'none'}>
              <Pressable
                onPressOut={closeDrawer}
                style={StyleSheet.absoluteFill}
              />
            </BlurView>
          </Animated.View>
        )}
      </>
    );
  },
);
