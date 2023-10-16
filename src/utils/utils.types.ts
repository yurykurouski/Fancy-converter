import { AvailableCurrenciesNames } from 'types';

export type OnlyCourses = {
  [key in AvailableCurrenciesNames]: number;
};

export type TGetCoursesForSelectedCurrencies = (
  exchangeCourse: OnlyCourses,
  selectedCurrencies: AvailableCurrenciesNames[] | [],
) => OnlyCourses | undefined;

export type ShowNoConnectionAlert = (
  onPress?: (value?: any) => void,
  saveDate?: string | null,
) => void;

export type TGetSaveDateReadable = (currentDate: Date) => string;
