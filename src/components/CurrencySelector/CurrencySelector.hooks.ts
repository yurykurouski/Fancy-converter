import { useMemo } from 'react';

import { UseCurrenciesListToArray } from './CurrencySelector.types';

export const useCurrenciesListToArray: UseCurrenciesListToArray =
  avaliableCurrencies =>
    useMemo(
      () =>
        Object.keys(avaliableCurrencies).map(value => ({
          [value]: {
            currencyName: avaliableCurrencies[value].currencyName,
            currencySymbol: avaliableCurrencies[value].currencySymbol,
            id: avaliableCurrencies[value].id,
          },
        })),
      [avaliableCurrencies],
    );
