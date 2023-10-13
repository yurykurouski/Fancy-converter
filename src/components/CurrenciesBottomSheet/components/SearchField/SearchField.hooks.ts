import { Dispatch, SetStateAction, useCallback } from 'react';
import { debounce } from 'lodash';
import currencies from 'resources/avaliable-currencies';
import { AvailableCurrenciesNames } from 'types';

import {
  filterCurrencies,
  mapCurrenciesNamesBasedOnLanguage,
} from './SearchField.utils';

const searchHash: { [key: string]: AvailableCurrenciesNames[] } = {};

export const useHandleTextChange = (
  setAvailableCurrencies: Dispatch<SetStateAction<AvailableCurrenciesNames[]>>,
) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(
    debounce((value: string) => {
      if (searchHash[value]) {
        return setAvailableCurrencies(searchHash[value]);
      }

      const valueUpperCase = value.trim().toUpperCase();

      const filteredArray = currencies.filter((el, index) => {
        const namesBasedOnLanguage =
          mapCurrenciesNamesBasedOnLanguage(currencies)[index];

        return filterCurrencies(el, valueUpperCase, namesBasedOnLanguage);
      });

      searchHash[value] = filteredArray;
      setAvailableCurrencies(searchHash[value]);
    }, 200),
    [setAvailableCurrencies],
  );
