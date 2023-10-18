import { AvailableFiatNames } from 'types';

export type OnlyCourses = {
  [key in AvailableFiatNames]: number;
};

export type TGetCoursesForSelectedCurrencies = (
  exchangeCourse: OnlyCourses,
  selectedCurrencies: AvailableFiatNames[] | [],
) => OnlyCourses | undefined;

export type ShowNoConnectionAlert = (
  onPress?: (value?: any) => void,
  saveDate?: string | null,
) => void;

export type TGetSaveDateReadable = (currentDate: Date) => string;
