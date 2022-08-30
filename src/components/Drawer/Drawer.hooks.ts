/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useEffect } from 'react';
import { Animated } from 'react-native';
import { State } from 'react-native-gesture-handler';

import {
  UseGestureHandler,
  UseGestureStateHandler,
  UseOpacityControl,
} from './Drawer.types';
import { decreaseOpacity, increaseOpacity } from './drawer-animations';

export const useOpacityControl: UseOpacityControl = isDrawerOpened =>
  useEffect(() => {
    if (isDrawerOpened) {
      increaseOpacity();
    } else {
      decreaseOpacity();
    }
  }, [isDrawerOpened]);

export const useGestureStateHandler: UseGestureStateHandler = (
  drawerAnimation,
  animatedPosition,
) =>
  useCallback(
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

export const useGestureHandler: UseGestureHandler = animatedPosition =>
  useCallback(
    ({ nativeEvent }) => {
      const { translationX } = nativeEvent;
      if (translationX > 0) return;

      animatedPosition.setValue(translationX);
    },
    [animatedPosition],
  );
