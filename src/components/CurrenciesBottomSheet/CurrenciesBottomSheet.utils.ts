import { WINDOW_HEIGHT } from '@gorhom/bottom-sheet';

import { isIos } from './../../utils/platform';
import { CheckIfSeparatorIsNeeded } from './CurrenciesBottomSheet.types';

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
  WINDOW_HEIGHT - ((isIos ? 40 : -4) + bottomInset + topInset),
];
