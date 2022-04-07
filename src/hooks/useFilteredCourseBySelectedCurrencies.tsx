import { CurrenciesCourses } from 'types/avaliable-currencies';
import { getCoursesForSelectedCurrencies } from 'utils';
import { OnlyCourses } from 'utils/utils.types';

type UseFilteredCourseBySelectedCurrencies = (
  exchangeCourse: OnlyCourses | null,
  selectedCurrencies: string[] | [],
) => CurrenciesCourses;

export const useFilteredCourseBySelectedCurrencies: UseFilteredCourseBySelectedCurrencies =
  (exchangeCourse, selectedCurrencies) => {
    if (!exchangeCourse) {
      return;
    }

    return getCoursesForSelectedCurrencies(exchangeCourse, selectedCurrencies);
  };
