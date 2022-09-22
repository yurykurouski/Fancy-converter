import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { CancelButton } from 'components/common/CancelButton';

import { Selector } from '../Selector';

import { useAnimationStyles, useSwipeAnimation } from './SwipableExample.hooks';

import { useStyles } from './SwipableExample.styles';

export const SwipableExample = () => {
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
      <CancelButton size={30} additionalStyle={{ marginLeft: 10 }} />
      <Animated.View
        style={[
          { position: 'absolute', width: '100%' },
          selectorContainerStyle,
        ]}>
        <Selector withRipple animatedRippleStyle={animatedRippleStyle} />
      </Animated.View>
    </View>
  );
};
