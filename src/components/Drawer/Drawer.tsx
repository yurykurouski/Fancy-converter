import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { BLUR_AMOUNT, BLUR_RADIUS } from 'constants/constants';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectDrawerOpenStatus } from 'store/drawer/selectors';

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
        <Animated.View
          pointerEvents={isDrawerOpened ? 'box-none' : 'none'}
          style={[styles.fadeContainer, animatedOpacity]}>
          <BlurView
            style={styles.fade}
            reducedTransparencyFallbackColor={
              THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
            }
            blurType={colorScheme!}
            blurRadius={BLUR_RADIUS}
            blurAmount={BLUR_AMOUNT}>
            <Pressable
              onPressOut={closeDrawer}
              style={StyleSheet.absoluteFill}
            />
          </BlurView>
        </Animated.View>
      </>
    );
  },
);
