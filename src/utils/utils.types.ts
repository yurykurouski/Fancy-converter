import {
  FormattedCurrenciesCourses,
  ResultFromAPI,
} from 'types/avaliable-currencies';

export type GetOnlyCourses = (
  exchangeCourse: ResultFromAPI[],
) => ResultFromAPI[];

export type GetCoursesForSelectedCurrencies = (
  courses: ResultFromAPI[],
  selectedCurrencies: string[] | [],
) => ResultFromAPI[];

export type GetFilteredCoursesByOperationType = (
  operationType: string,
  coursesForSelectedCurrencies: ResultFromAPI[],
) => ResultFromAPI[];

export type GetFormattedCourses = (
  filteredCoursesByOperationType: ResultFromAPI[],
) => FormattedCurrenciesCourses;

export type GetAdjustedCourses = (
  formattedCourses: FormattedCurrenciesCourses,
) => FormattedCurrenciesCourses;
