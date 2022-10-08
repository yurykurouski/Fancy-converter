import { useCallback } from 'react';
import { debounce } from 'lodash';
import { currencies } from 'resources/avaliable-currencies.json';

import { UseHandleTextChange } from './SearchField.types';
import {
  filterCurrencies,
  mapCurrenciesNamesBasedOnLanguage,
} from './SearchField.utils';

const filterResults: string[][] = [];
let prevQueryLength = 0;

export const useHandleTextChange: UseHandleTextChange = ({
  setAvaliableCurrencies,
  setIsCalculatingValue,
}) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(
    debounce(value => {
      if (!value) {
        filterResults.length = 0;

        setTimeout(() => {
          setAvaliableCurrencies(currencies);
          setIsCalculatingValue(false);
        });
        prevQueryLength = 0;
        return;
      }

      let filteredCurrencies;
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

        setAvaliableCurrencies(filteredCurrencies);
        setIsCalculatingValue(false);

        prevQueryLength = value.length;
      });
    }, 300),
    [],
  );
