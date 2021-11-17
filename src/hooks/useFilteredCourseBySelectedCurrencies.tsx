import {
  getCoursesForSelectedCurrencies,
  getOnlyCourses,
} from '../utils/getOnlyCourses';

export const useFilteredCourseBySelectedCurrencies = (
  exchancgeCourse,
  selectedCurrencies,
) => {
  if (!exchancgeCourse) {
    return;
  }
  const onlyCourses = getOnlyCourses(exchancgeCourse);

  const coursesForSelectedCurrencies = getCoursesForSelectedCurrencies(
    onlyCourses,
    selectedCurrencies,
  );

  return coursesForSelectedCurrencies;
};
