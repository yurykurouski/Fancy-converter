import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { selectUIStatus } from 'store/ui/selectors';

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

    const { isDrawerOpened } = useSelector(selectUIStatus);

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
          <Pressable onPressIn={closeDrawer} style={StyleSheet.absoluteFill} />
        </Animated.View>
      </>
    );
  },
);
