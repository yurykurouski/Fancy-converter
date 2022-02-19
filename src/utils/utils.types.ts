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

export type ShowNoConnectionAlert = (
  onPress?: (value?: string) => void,
  saveDate?: string,
) => void;

export type CompareDateByHour = (
  currentDate: Date,
  lastUpdateDate: Date,
) => boolean;
