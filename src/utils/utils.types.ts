import { EAvailableFiatNames } from 'types';

export type OnlyCourses = {
  [key in EAvailableFiatNames]: number;
};

export type TGetCoursesForSelectedCurrencies = (
  exchangeCourse: OnlyCourses,
  selectedCurrencies: EAvailableFiatNames[] | [],
) => OnlyCourses | undefined;

export type ShowNoConnectionAlert = (
  onPress?: (value?: any) => void,
  saveDate?: string | null,
) => void;

export type TGetSaveDateReadable = (currentDate: Date) => string;
