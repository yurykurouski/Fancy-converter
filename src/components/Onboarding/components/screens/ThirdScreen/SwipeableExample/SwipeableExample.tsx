import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import {
  runOnJS,
  SharedValue,
  useAnimatedReaction,
} from 'react-native-reanimated';

import { Selector } from '../Selector';

import { useStyles } from './SwipeableExample.styles';

type TProps = {
  rippleAnimValue: SharedValue<number>;
  value: number;
};

export const SwipeableExample = ({ value, rippleAnimValue }: TProps) => {
  const styles = useStyles();

  const [isSelected, setIsSelected] = useState(value === 1);

  useEffect(() => {}, []);

  useAnimatedReaction(
    () => {
      return rippleAnimValue.value;
    },
    currentValue => {
      if (currentValue === 0) {
        runOnJS(setIsSelected)(false);
      }
      if (currentValue >= value * 51 - 40) {
        runOnJS(setIsSelected)(true);
      }
    },
  );

  return (
    <View style={styles.underlayBackground}>
      <Animated.View style={[styles.selector]}>
        <Selector isSelected={isSelected} />
      </Animated.View>
    </View>
  );
};
