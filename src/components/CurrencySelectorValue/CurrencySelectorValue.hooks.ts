import { useCallback } from 'react';

import { TUseOnPressHandler } from './CurrencySelectorValue.types';

export const useOnPressHandler: TUseOnPressHandler = (
  isActive,
  modalSelectedCurrencies,
  currencyCode,
  setModalSelectedCurrencies,
) =>
  useCallback(() => {
    if (isActive) {
      const filteredCurrenciesList = modalSelectedCurrencies.filter(
        code => code !== currencyCode,
      );

      setModalSelectedCurrencies(filteredCurrenciesList);
    } else {
      setModalSelectedCurrencies([...modalSelectedCurrencies, currencyCode]);
    }
  }, [
    currencyCode,
    isActive,
    modalSelectedCurrencies,
    setModalSelectedCurrencies,
  ]);
