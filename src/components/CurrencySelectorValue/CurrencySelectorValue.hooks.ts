import { useCallback } from 'react';

import { TUseOnPressHandler } from './CurrencySelectorValue.types';

export const useOnPressHandler: TUseOnPressHandler = (
  isActive,
  currencyCode,
  removeSelected,
  addSelected,
) =>
  useCallback(() => {
    if (isActive) {
      removeSelected(currencyCode);
    } else {
      addSelected(currencyCode);
    }
  }, [addSelected, currencyCode, isActive, removeSelected]);
