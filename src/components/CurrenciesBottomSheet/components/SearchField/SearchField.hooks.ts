import { useCallback, useMemo, useState } from 'react';
import { l } from 'resources/localization';

import { UseHandleTextChange } from './SearchField.types';

const filterResults: string[][] = [[]];

const useCurrnciesNamesBasedOnLanguage = (currencies: string[]): string[] =>
  useMemo(() => currencies.map(curr => l[curr]), [currencies]);

export const useHandleTextChange: UseHandleTextChange = ({
  setSearchValue,
  setAvaliableCurrencies,
  currencies,
}) => {
  const [prevQueryLength, setPrevQueryLength] = useState(0);

  const currenciesTranslations = useCurrnciesNamesBasedOnLanguage(currencies);

  return useCallback(
    value => {
      setSearchValue(value);
      if (!value) {
        filterResults.length = 1;
        return setAvaliableCurrencies(currencies);
      }

      if (value.length < prevQueryLength) {
        setAvaliableCurrencies(filterResults[value.length]);
        setPrevQueryLength(value.length);

        return;
      }

      const filteredCurrencies = currencies.filter(
        (el, index) =>
          el.toLowerCase().includes(value.toLowerCase()) ||
          currenciesTranslations[index]
            .toLowerCase()
            .includes(value.toLowerCase()),
      );

      setPrevQueryLength(value.length);

      setAvaliableCurrencies(filteredCurrencies);
      filterResults.push(filteredCurrencies);
    },
    [
      currencies,
      currenciesTranslations,
      prevQueryLength,
      setAvaliableCurrencies,
      setSearchValue,
    ],
  );
};
