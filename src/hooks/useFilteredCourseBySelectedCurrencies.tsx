import { FormattedCurrenciesCourses } from 'types/avaliable-currencies';
import { getAdjustedCourses, getCoursesForSelectedCurrencies } from 'utils';
import { OnlyCourses } from 'utils/utils.types';

type UseFilteredCourseBySelectedCurrencies = (
  exchangeCourse: OnlyCourses | null,
  selectedCurrencies: string[] | [],
) => FormattedCurrenciesCourses;

export const useFilteredCourseBySelectedCurrencies: UseFilteredCourseBySelectedCurrencies =
  (exchangeCourse, selectedCurrencies) => {
    if (!exchangeCourse) {
      return;
    }

    const coursesForSelectedCurrencies = getCoursesForSelectedCurrencies(
      exchangeCourse,
      selectedCurrencies,
    );

    return getAdjustedCourses(coursesForSelectedCurrencies);
  };
