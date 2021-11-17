import {
  getCoursesForSelectedCurrencies,
  getOnlyCourses,
} from '../utils/getOnlyCourses';

export const useFirteredCourseBySelectedCurrencies = (
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
