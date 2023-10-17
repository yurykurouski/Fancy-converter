import { AvailableFiatNames } from 'types';

import { OnlyCourses, TGetCoursesForSelectedCurrencies } from './utils.types';

export const getCoursesForSelectedCurrencies: TGetCoursesForSelectedCurrencies =
  (onlyCourses, selectedCurrencies) => {
    if (selectedCurrencies.length === 0 || !selectedCurrencies) {
      return;
    }

    return (selectedCurrencies as AvailableFiatNames[]).reduce(
      (acc, currencyName) => ({
        ...acc,
        [currencyName]: onlyCourses[currencyName],
      }),
      {},
    ) as OnlyCourses;
  };
