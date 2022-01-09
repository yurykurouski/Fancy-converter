import { useMemo } from 'react';

import { UseCurrenciesListToArray } from './CurrencySelector.types';

export const useCurrenciesListToArray: UseCurrenciesListToArray =
  avaliableCurrencies =>
    useMemo(
      () =>
        Object.keys(avaliableCurrencies).map(value => ({
          [value]: {
            Cur_Name: avaliableCurrencies[value].Cur_Name,
            Cur_Symbol: avaliableCurrencies[value].Cur_Symbol,
            Cur_Abbreviation: avaliableCurrencies[value].Cur_Abbreviation,
          },
        })),
      [avaliableCurrencies],
    );
