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

export type CompareDateByHour = (
  currentDate: Date,
  lastUpdateDate: Date,
) => boolean;

export type GetIsCoursesCheckedLastHour = (
  currentDate: Date,
) => Promise<boolean>;

export type TGetSaveDateReadable = (currentDate: Date) => string;
