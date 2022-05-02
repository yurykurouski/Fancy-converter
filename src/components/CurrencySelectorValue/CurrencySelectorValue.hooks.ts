import { useCallback } from 'react';

import { UseOnPressHandler } from './CurrencySelectorValue.types';

export const useOnPressHandler: UseOnPressHandler = (
  isExpanded,
  isActive,
  modalSelectedCurrencies,
  currencyCode,
  setModalSelectedCurrencies,
  setIsActive,
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

    setIsActive(!isActive);
  }, [
    currencyCode,
    isActive,
    isExpanded,
    modalSelectedCurrencies,
    setIsActive,
    setModalSelectedCurrencies,
  ]);
