import React, { useEffect, useState } from 'react';
import {
  runOnJS,
  SharedValue,
  useAnimatedReaction,
} from 'react-native-reanimated';

import { Selector } from '../Selector';

type TProps = {
  rippleAnimValue: SharedValue<number>;
  value: number;
};

export const SwipeableExample = ({ value, rippleAnimValue }: TProps) => {
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

  return <Selector isSelected={isSelected} />;
};
