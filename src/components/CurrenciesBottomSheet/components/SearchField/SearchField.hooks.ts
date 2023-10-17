//@ts-nocheck
import { useCallback } from 'react';
import { TSetFilteredCurrencies } from 'hooks/store/types';
import { debounce } from 'lodash';
import currencies from 'resources/avaliable-currencies';
import { ECurrencyType, TAvailableCurrencies } from 'types';

import {
  filterCurrencies,
  mapCurrenciesNamesBasedOnLanguage,
} from './SearchField.utils';

//TODO: deal with types in this file :)

const searchHash: {
  [k in ECurrencyType]: {
    [key: string]: TAvailableCurrencies[ECurrencyType];
  };
} = {
  [ECurrencyType.FLAT]: {},
  [ECurrencyType.CRYPTO]: {},
};

export const useHandleTextChange = (
  setFilteredCurrencies: TSetFilteredCurrencies,
  activeCurrencyType: ECurrencyType,
) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(
    debounce((value: string) => {
      if (searchHash[activeCurrencyType][value]) {
        return setFilteredCurrencies(
          activeCurrencyType,
          searchHash[activeCurrencyType][value],
        );
      }

      const valueUpperCase = value.trim().toUpperCase();

      const filteredArray = currencies[activeCurrencyType].filter(
        (el, index) => {
          const namesBasedOnLanguage = mapCurrenciesNamesBasedOnLanguage(
            currencies[activeCurrencyType],
          )[index];

          return filterCurrencies(el, valueUpperCase, namesBasedOnLanguage);
        },
      );

      //@ts-expect-error
      searchHash[activeCurrencyType][value] = filteredArray;
      setFilteredCurrencies(
        activeCurrencyType,
        searchHash[activeCurrencyType][value],
      );
    }, 200),
    [setFilteredCurrencies, activeCurrencyType],
  );
