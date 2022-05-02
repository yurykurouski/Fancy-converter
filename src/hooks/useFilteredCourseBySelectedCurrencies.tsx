import { getCoursesForSelectedCurrencies } from 'utils';

import { UseFilteredCourseBySelectedCurrencies } from './types';

export const useFilteredCourseBySelectedCurrencies: UseFilteredCourseBySelectedCurrencies =
  (exchangeCourse, selectedCurrencies) => {
    if (!exchangeCourse) {
      return;
    }

    return getCoursesForSelectedCurrencies(exchangeCourse, selectedCurrencies);
  };
