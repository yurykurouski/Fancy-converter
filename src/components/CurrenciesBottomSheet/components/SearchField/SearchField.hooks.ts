import { useCallback } from 'react';
import { debounce } from 'lodash';
import currencies from 'resources/avaliable-currencies';
import { AvailableCurrenciesNames } from 'types';

import { UseHandleTextChange } from './SearchField.types';
import {
  filterCurrencies,
  mapCurrenciesNamesBasedOnLanguage,
} from './SearchField.utils';

const filterResults: AvailableCurrenciesNames[][] = [];
let prevQueryLength = 0;

export const useHandleTextChange: UseHandleTextChange = ({
  setAvailableCurrencies,
  setIsCalculatingValue,
}) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(
    debounce(value => {
      if (!value) {
        filterResults.length = 0;

        setTimeout(() => {
          setAvailableCurrencies(currencies);
          setIsCalculatingValue(false);
        });
        prevQueryLength = 0;
        return;
      }

      let filteredCurrencies: AvailableCurrenciesNames[];
      const valueUpperCase = value.trim().toUpperCase();

      setTimeout(() => {
        if (value.length < prevQueryLength || !filterResults.length) {
          filteredCurrencies = currencies.filter((el, index) => {
            const namesBasedOnLanguage =
              mapCurrenciesNamesBasedOnLanguage(currencies)[index];

            return filterCurrencies(el, valueUpperCase, namesBasedOnLanguage);
          });

          filterResults.pop();
        } else {
          filteredCurrencies = filterResults[filterResults.length - 1].filter(
            (el, index) => {
              const namesBasedOnLanguage = mapCurrenciesNamesBasedOnLanguage(
                filterResults[filterResults.length - 1],
              )[index];

              return filterCurrencies(el, valueUpperCase, namesBasedOnLanguage);
            },
          );

          filterResults.push(filteredCurrencies);
        }

        setAvailableCurrencies(filteredCurrencies);
        setIsCalculatingValue(false);

        prevQueryLength = value.length;
      });
    }, 300),
    [],
  );
