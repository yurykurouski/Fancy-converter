import {
  FormattedCurrenciesCourses,
  ResultFromAPI,
} from 'types/avaliable-currencies';
import {
  getAdjustedCourses,
  getCoursesForSelectedCurrencies,
  getFilteredCoursesByOperationType,
  getFormattedCourses,
  getOnlyCourses,
} from 'utils';

type UseFilteredCourseBySelectedCurrencies = (
  exchangeCourse: ResultFromAPI[] | null,
  selectedCurrencies: string[] | [],
  operationType: string,
) => FormattedCurrenciesCourses;

export const useFilteredCourseBySelectedCurrencies: UseFilteredCourseBySelectedCurrencies =
  (exchangeCourse, selectedCurrencies, operationType) => {
    if (!exchangeCourse) {
      return;
    }
    const onlyCourses = getOnlyCourses(exchangeCourse);

    const coursesForSelectedCurrencies = getCoursesForSelectedCurrencies(
      onlyCourses,
      selectedCurrencies,
    );

    const filteredCoursesByOperationType = getFilteredCoursesByOperationType(
      operationType,
      coursesForSelectedCurrencies,
    );

    const formattedCourses = getFormattedCourses(
      filteredCoursesByOperationType,
    );

    return getAdjustedCourses(formattedCourses);
  };
