import {
  getCoursesForSelectedCurrencies,
  getFilteredCoursesByOperationType,
  getOnlyCourses,
  getFormattedCourses,
} from '../utils/getOnlyCourses';

export const useFilteredCourseBySelectedCurrencies = (
  exchancgeCourse,
  selectedCurrencies,
  operationType,
) => {
  if (!exchancgeCourse) {
    return;
  }
  const onlyCourses = getOnlyCourses(exchancgeCourse);

  const coursesForSelectedCurrencies = getCoursesForSelectedCurrencies(
    onlyCourses,
    selectedCurrencies,
  );

  const filteredCoursesByOperationType = getFilteredCoursesByOperationType(
    operationType,
    coursesForSelectedCurrencies,
  );

  return getFormattedCourses(filteredCoursesByOperationType);
};
