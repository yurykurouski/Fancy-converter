import { useMemo } from 'react';

export const useCurrenciesListToArray = (results) =>
  useMemo(
    () =>
      Object.keys(results).map(value => ({
        [value]: {
          currencyName: results[value].currencyName,
          currencySymbol: results[value].currencySymbol,
          id: results[value].id,
        },
      })),
    [results],
  );
