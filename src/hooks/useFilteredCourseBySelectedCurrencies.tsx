import {
  getAdjustedCourses,
  getCoursesForSelectedCurrencies,
  getFilteredCoursesByOperationType,
  getFormattedCourses,
  getOnlyCourses,
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

  const formattedCourses = getFormattedCourses(filteredCoursesByOperationType);

  return getAdjustedCourses(formattedCourses);
};
