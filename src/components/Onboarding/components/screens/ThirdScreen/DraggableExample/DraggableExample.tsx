import React, { useEffect } from 'react';
import { Animated } from 'react-native';

import { Selector } from '../Selector';

import {
  useDragAnimatedStyles,
  useDragAnimation,
} from './DraggableExample.hooks';

import { styles } from './DraggableExample.styles';

const DRAGGABLE_ITEMS = [1, 2];

export const DraggableExample = () => {
  const {
    animatedMainStyles,
    animatedSecondaryStyles,
    animatedHandleColorStyle,
    animatedRippleStyle,
  } = useDragAnimatedStyles();

  const dragAnimation = useDragAnimation();

  useEffect(() => {
    dragAnimation();

    const intervalId = setInterval(dragAnimation, 9000);

    return () => clearInterval(intervalId);
  }, [dragAnimation]);

  return (
    <>
      {DRAGGABLE_ITEMS.map((_, index) => {
        const dragAnimationVariant =
          index === 0 ? animatedMainStyles : animatedSecondaryStyles;

        return (
          <Animated.View
            style={[styles.container, dragAnimationVariant]}
            key={index}>
            <Selector
              isSelected={index === 0}
              animatedHandleColorStyle={animatedHandleColorStyle}
              animatedRippleStyle={animatedRippleStyle}
            />
          </Animated.View>
        );
      })}
    </>
  );
};
