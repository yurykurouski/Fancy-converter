import {
  FormattedCurrenciesCourses,
  ResultFromAPI,
} from 'types/avaliable-currencies';

export type GetOnlyCourses = (exchangeCourse: ResultFromAPI[]) => OnlyCourses;

export type OnlyCourses = {
  [key: string]: number;
};

export type GetCoursesForSelectedCurrencies = (
  exchangeCourse: OnlyCourses,
  selectedCurrencies: string[] | [],
) => OnlyCourses;

export type GetAdjustedCourses = (
  formattedCourses: FormattedCurrenciesCourses,
) => FormattedCurrenciesCourses;
