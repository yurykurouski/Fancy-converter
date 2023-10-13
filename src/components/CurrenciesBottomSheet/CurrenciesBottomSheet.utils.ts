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

export const getSnapPoints = (
  bottomInset: number,
  topInset: number,
  windowHeight: number,
) => [70, windowHeight - ((isIos ? 40 : -4) + bottomInset + topInset)];
