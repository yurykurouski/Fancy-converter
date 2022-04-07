import { GetCoursesForSelectedCurrencies } from './utils.types';

export const getCoursesForSelectedCurrencies: GetCoursesForSelectedCurrencies =
  (onlyCourses, selectedCurrencies) => {
    if (selectedCurrencies.length === 0) {
      return;
    }

    return (selectedCurrencies as string[]).reduce(
      (acc, currencyName) => ({
        ...acc,
        [currencyName]: onlyCourses[currencyName],
      }),
      {},
    );
  };
