import { getCoursesForSelectedCurrencies } from 'utils';

import { TUseFilteredCourseBySelectedCurrencies } from './types';

export const useFilteredCourseBySelectedCurrencies: TUseFilteredCourseBySelectedCurrencies =
  (exchangeCourse, selectedCurrencies) => {
    if (!exchangeCourse) {
      return;
    }

    return getCoursesForSelectedCurrencies(exchangeCourse, selectedCurrencies);
  };
