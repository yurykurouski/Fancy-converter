import { useCallback, useMemo } from 'react';
import { l } from 'resources/localization';

import { UseHandleTextChange } from './SearchField.types';

const useCurrnciesNamesBasedOnLanguage = (currencies: string[]): string[] =>
  useMemo(() => currencies.map(curr => l[curr]), [currencies]);

export const useHandleTextChange: UseHandleTextChange = ({
  setSearchValue,
  setAvaliableCurrencies,
  currencies,
}) => {
  const currenciesTranslations = useCurrnciesNamesBasedOnLanguage(currencies);

  return useCallback(
    value => {
      setSearchValue(value);

      if (!value) {
        return setAvaliableCurrencies(currencies);
      }

      const filteredCurrencies = currencies.filter(
        (el, index) =>
          el.toLowerCase().includes(value.toLowerCase()) ||
          currenciesTranslations[index]
            .toLowerCase()
            .includes(value.toLowerCase()),
      );

      setAvaliableCurrencies(filteredCurrencies);
    },
    [
      currencies,
      currenciesTranslations,
      setAvaliableCurrencies,
      setSearchValue,
    ],
  );
};
