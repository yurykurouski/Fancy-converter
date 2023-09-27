import React from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { isIos } from 'utils';

import { useGestureHandler, useGestureStateHandler } from './Drawer.hooks';
import { Props } from './Drawer.types';
import { DrawerContent } from './DrawerContent';

import { useStyles } from './Drawer.styles';

export const Drawer = React.memo<Props>(
  ({ animatedPosition, drawerAnimation, isDrawerOpened }) => {
    const styles = useStyles();
    const { colorScheme } = useSelector(selectColorSchemeState);

    const gestureHandler = useGestureHandler(animatedPosition);

    const gestureStateHandler = useGestureStateHandler(
      drawerAnimation,
      animatedPosition,
    );

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
        {isDrawerOpened && (
          <BlurView
            style={[styles.fadeContainer]}
            reducedTransparencyFallbackColor={
              THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
            }
            blurType={colorScheme!}
            blurRadius={isIos ? 10 : 4}
            pointerEvents={isDrawerOpened ? 'box-none' : 'none'}>
            <Pressable
              onPressOut={drawerAnimation}
              style={StyleSheet.absoluteFill}
            />
          </BlurView>
        )}
      </>
    );
  },
);
