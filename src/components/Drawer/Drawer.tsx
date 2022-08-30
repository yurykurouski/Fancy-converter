import React from 'react';
import { Animated, Pressable } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import {
  useGestureHandler,
  useGestureStateHandler,
  useOpacityControl,
} from './Drawer.hooks';
import { Props } from './Drawer.types';
import { opacityValue } from './drawer-animations';
import { DrawerContent } from './DrawerContent';

import { useStyles } from './Drawer.styles';

export const Drawer = React.memo<Props>(
  ({ animatedPosition, drawerAnimation, isDrawerOpened }) => {
    const styles = useStyles();

    const gestureHandler = useGestureHandler(animatedPosition);

    const gestureStateHandler = useGestureStateHandler(
      drawerAnimation,
      animatedPosition,
    );

    useOpacityControl(isDrawerOpened);

    return (
      <>
        <PanGestureHandler
          onGestureEvent={gestureHandler}
          onHandlerStateChange={gestureStateHandler}>
          <Animated.View
            style={[
              styles.drawer,
              { transform: [{ translateX: animatedPosition }] },
            ]}>
            <DrawerContent />
          </Animated.View>
        </PanGestureHandler>
        <Animated.View
          style={[styles.fadeContainer, { opacity: opacityValue }]}
          pointerEvents={isDrawerOpened ? 'box-none' : 'none'}>
          <Pressable onPressOut={drawerAnimation} style={[styles.fade]} />
        </Animated.View>
      </>
    );
  },
);
