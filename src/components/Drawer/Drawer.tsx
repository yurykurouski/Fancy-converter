/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback, useEffect } from 'react';
import { Animated, Pressable, Text } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { styles } from './Drawer.styles';
import {
  decreaseOpacity,
  increaseOpacity,
  opacityValue,
} from './drawer-animations';

type Props = {
  animatedPosition: Animated.Value;
  drawerAnimation: () => void;
  isDrawerOpened: boolean;
};

export const Drawer = React.memo<Props>(
  ({ animatedPosition, drawerAnimation, isDrawerOpened }) => {
    useEffect(() => {
      if (isDrawerOpened) {
        increaseOpacity();
      } else {
        decreaseOpacity();
      }
    }, [isDrawerOpened]);

    const gestureHandler = useCallback(
      ({ nativeEvent }) => {
        const { translationX } = nativeEvent;
        if (translationX > 0) return;

        animatedPosition.setValue(translationX);
      },
      [animatedPosition],
    );

    const gestureStateHandler = useCallback(
      ({ nativeEvent }) => {
        const { translationX, oldState } = nativeEvent;

        if (oldState === State.ACTIVE) {
          if (
            Math.abs(translationX) >
            // @ts-ignore
            Math.abs(animatedPosition._startingValue) / 2
          ) {
            drawerAnimation();
          } else {
            Animated.timing(animatedPosition, {
              toValue: 0,
              duration: 200,
              useNativeDriver: false,
            }).start();
          }
        }
      },
      [animatedPosition, drawerAnimation],
    );

    return (
      isDrawerOpened && (
        <>
          <PanGestureHandler
            onGestureEvent={gestureHandler}
            onHandlerStateChange={gestureStateHandler}>
            <Animated.View
              style={[
                styles.drawer,
                { transform: [{ translateX: animatedPosition }] },
              ]}>
              <Text>TEST</Text>
            </Animated.View>
          </PanGestureHandler>
          <Animated.View
            style={[styles.fadeContainer, { opacity: opacityValue }]}>
            <Pressable onPressOut={drawerAnimation} style={[styles.fade]} />
          </Animated.View>
        </>
      )
    );
  },
);
