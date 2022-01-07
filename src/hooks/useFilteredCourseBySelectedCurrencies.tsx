import {
  FormattedCurrenciesCourses,
  ResultFromAPI,
} from 'types/avaliable-currencies';
import {
  getAdjustedCourses,
  getCoursesForSelectedCurrencies,
  getOnlyCourses,
} from 'utils';

type UseFilteredCourseBySelectedCurrencies = (
  exchangeCourse: ResultFromAPI[] | null,
  selectedCurrencies: string[] | [],
) => FormattedCurrenciesCourses;

export const useFilteredCourseBySelectedCurrencies: UseFilteredCourseBySelectedCurrencies =
  (exchangeCourse, selectedCurrencies) => {
    if (!exchangeCourse) {
      return;
    }
    const onlyCourses = getOnlyCourses(exchangeCourse);

    const coursesForSelectedCurrencies = getCoursesForSelectedCurrencies(
      onlyCourses,
      selectedCurrencies,
    );

    return getAdjustedCourses(coursesForSelectedCurrencies);
  };
