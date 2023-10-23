import { EAvailableFiatNames } from 'types';

import { OnlyCourses, TGetCoursesForSelectedCurrencies } from './utils.types';

export const getCoursesForSelectedCurrencies: TGetCoursesForSelectedCurrencies =
  (onlyCourses, selectedCurrencies) => {
    if (selectedCurrencies.length === 0 || !selectedCurrencies) {
      return;
    }

    return (selectedCurrencies as EAvailableFiatNames[]).reduce(
      (acc, currencyName) => ({
        ...acc,
        [currencyName]: onlyCourses[currencyName],
      }),
      {},
    ) as OnlyCourses;
  };
