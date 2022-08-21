import { Animated } from 'react-native';

import { DIRECTIONS_DOWN, DIRECTIONS_UP } from './CurrenciesBottomSheet.consts';
import { CheckIfSeparatorIsNeeded } from './CurrenciesBottomSheet.types';
export const animatedPosition = new Animated.Value(0);

export const handleScrollDirectionChange = (offset: string) => {
  if (offset === DIRECTIONS_UP) {
    Animated.timing(animatedPosition, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  } else if (offset === DIRECTIONS_DOWN) {
    Animated.timing(animatedPosition, {
      toValue: 60,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
};

export const checkIfSeparatorIsNeeded: CheckIfSeparatorIsNeeded = (
  itemName,
  index,
  avaliableCurrencies,
) => {
  if (index === 0) {
    return true;
  }
  return itemName[0] !== avaliableCurrencies[index - 1]?.[0];
};
