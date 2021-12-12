import { ResultFromAPI } from 'types/avaliable-currencies';

import {
  GetAdjustedCourses,
  GetCoursesForSelectedCurrencies,
  GetFilteredCoursesByOperationType,
  GetFormattedCourses,
  GetOnlyCourses,
} from './utils.types';

export const getOnlyCourses: GetOnlyCourses = exchangeCourse => {
  const withBYNCourse = {
    ...exchangeCourse[0],
    BYN_in: '1',
    BYN_out: '1',
  } as ResultFromAPI;

  const onlyCurrenciesNamesValues = Object.keys(withBYNCourse).filter(
    key => key.match(/_out$/) || key.match(/_in$/),
  );

  return onlyCurrenciesNamesValues.map(key => ({
    [key]: withBYNCourse[key],
  }));
};

export const getCoursesForSelectedCurrencies: GetCoursesForSelectedCurrencies =
  (courses, selectedCurrencies) => {
    if (selectedCurrencies.length === 0) {
      return;
    }

    return courses?.filter(currencyCourse => {
      const currency = Object.keys(currencyCourse)[0];
      return getMathcedCurrency(currency, selectedCurrencies);
    });
  };

const getMathcedCurrency = (currency: string, selectedCurrencies: string[]) => {
  for (let i = 0; i < selectedCurrencies.length; i++) {
    const regexp = new RegExp(`^${selectedCurrencies[i]}_(in|out)`, 'i');
    if (regexp.test(currency)) {
      return regexp.test(currency);
    }
  }
};

export const getFilteredCoursesByOperationType: GetFilteredCoursesByOperationType =
  (operationType, coursesForSelectedCurrencies) => {
    const regexp = new RegExp(`_${operationType}$`, 'i');

    return coursesForSelectedCurrencies.filter(currencyCourse => {
      const key = Object.keys(currencyCourse)[0];

      return regexp.test(key);
    });
  };

export const getFormattedCourses: GetFormattedCourses =
  filteredCoursesByOperationType =>
    filteredCoursesByOperationType.reduce((acc, currency) => {
      const [currencyName, currencyCourseValue] = Object.entries(currency)[0];

      const formattedCurrencyName = currencyName.split(/_(in|out)$/)[0];

      return {
        ...acc,
        [formattedCurrencyName]: currencyCourseValue,
      };
    }, {});

export const getAdjustedCourses: GetAdjustedCourses = formattedCourses => {
  const adjustedCourses = { ...formattedCourses };

  for (const key in adjustedCourses) {
    switch (key) {
      case 'RUB':
      case 'UAH':
      case 'CZK':
        adjustedCourses[key] = String(Number(adjustedCourses[key]) / 100);
        break;
      case 'PLN':
      case 'CNY':
        adjustedCourses[key] = String(Number(adjustedCourses[key]) / 10);
        break;
    }
  }

  return adjustedCourses;
};
