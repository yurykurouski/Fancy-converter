import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { CancelButton } from 'components/common/CancelButton';

import { Selector } from '../Selector';

import {
  useAnimationStyles,
  useSwipeAnimation,
} from './SwipeableExample.hooks';

import { useStyles } from './SwipeableExample.styles';

export const SwipeableExample = () => {
  const styles = useStyles();

  const { selectorContainerStyle, animatedRippleStyle } = useAnimationStyles();
  const swipeAnimation = useSwipeAnimation();

  useEffect(() => {
    swipeAnimation();
    const intervalId = setInterval(swipeAnimation, 9000);

    return () => clearInterval(intervalId);
  }, [swipeAnimation]);

  return (
    <View style={styles.underlayBackground}>
      <CancelButton size={30} additionalStyle={styles.cancelBtnAdditional} />
      <Animated.View style={[styles.selector, selectorContainerStyle]}>
        <Selector withRipple animatedRippleStyle={animatedRippleStyle} />
      </Animated.View>
    </View>
  );
};
