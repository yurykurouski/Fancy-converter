import React, { useEffect } from 'react';
import { View } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import Animated, {
  SharedValue,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { DEFAULT_ANIMATION_DURATION } from 'constants/index';

import {
  useAnimatedIndicatorStyle,
  useReactAnimated,
} from './ScrollIndicator.hooks';

import { useStyles } from './ScrollIndicator.styles';

type TProps = {
  translationY: SharedValue<number>;
  totalHeight: number;
  indicatorState: SharedValue<number>;
};

export const ScrollIndicator = React.forwardRef<DrawerLayout, TProps>(
  ({ translationY, totalHeight, indicatorState }, drawerRef) => {
    const styles = useStyles();

    const translationX = useSharedValue(0);

    const { indicatorStyle, containerStyle } = useAnimatedIndicatorStyle(
      translationY,
      translationX,
      totalHeight,
    );

    useReactAnimated(indicatorState, translationX);

    useEffect(() => {
      //@ts-expect-error
      if (drawerRef?.current.drawerShown) {
        translationX.value = withSequence(
          withTiming(10, {
            duration: DEFAULT_ANIMATION_DURATION,
          }),
          withDelay(
            1500,
            withTiming(0, {
              duration: DEFAULT_ANIMATION_DURATION,
            }),
          ),
        );
      }
      //@ts-expect-error
    }, [drawerRef, drawerRef.current?.drawerShown, translationX]);

    return (
      <Animated.View style={[styles.container, containerStyle]}>
        <Animated.View
          style={[styles.common, styles.indicator, indicatorStyle]}
        />
        <View style={[styles.common, styles.background]} />
        <View style={[styles.common, styles.background]} />
        <View style={[styles.common, styles.background]} />
      </Animated.View>
    );
  },
);
