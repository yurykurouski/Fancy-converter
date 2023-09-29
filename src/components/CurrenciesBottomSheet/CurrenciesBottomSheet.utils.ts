import { Animated } from 'react-native';
import { WINDOW_HEIGHT } from '@gorhom/bottom-sheet';

import { isIos } from './../../utils/platform';
import { DIRECTIONS_DOWN, DIRECTIONS_UP } from './CurrenciesBottomSheet.consts';
import { CheckIfSeparatorIsNeeded } from './CurrenciesBottomSheet.types';

export const animatedPosition = new Animated.Value(0);

export const handleScrollDirectionChange = (
  offset: string,
  bottomInset: number,
) => {
  if (offset === DIRECTIONS_UP) {
    Animated.timing(animatedPosition, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  } else if (offset === DIRECTIONS_DOWN) {
    Animated.timing(animatedPosition, {
      toValue: 60 + bottomInset,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
};

export const checkIfSeparatorIsNeeded: CheckIfSeparatorIsNeeded = (
  itemName,
  index,
  availableCurrencies,
) => {
  if (index === 0) {
    return true;
  }
  return itemName[0] !== availableCurrencies[index - 1]?.[0];
};

export const getSnapPoints = (bottomInset: number, topInset: number) => [
  30,
  70,
  WINDOW_HEIGHT - ((isIos ? 34 : -8) + bottomInset + topInset),
];
