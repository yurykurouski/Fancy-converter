import { useCallback } from 'react';

import { UseOnPressHandler } from './CurrencySelectorValue.types';

export const useOnPressHandler: UseOnPressHandler = (
  isExpanded,
  isActive,
  modalSelectedCurrencies,
  currencyCode,
  setModalSelectedCurrencies,
) =>
  useCallback(() => {
    if (!isExpanded) return;
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
    isExpanded,
    modalSelectedCurrencies,
    setModalSelectedCurrencies,
  ]);
