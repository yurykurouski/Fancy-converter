import { ResultFromAPI } from 'types/avaliable-currencies';

import {
  GetAdjustedCourses,
  GetCoursesForSelectedCurrencies,
  GetOnlyCourses,
} from './utils.types';

export const getOnlyCourses: GetOnlyCourses = exchangeCourse => {
  const withBYNCourse = [
    ...exchangeCourse,
    {
      Cur_Abbreviation: 'BYN',
      Cur_Scale: 1,
      Cur_OfficialRate: 1,
    },
  ] as ResultFromAPI;

  return withBYNCourse.reduce(
    (acc, value) => ({
      ...acc,
      [value.Cur_Abbreviation]: value.Cur_OfficialRate,
    }),
    {},
  );
};

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

export const getAdjustedCourses: GetAdjustedCourses = couses => {
  const adjustedCourses = { ...couses };

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
