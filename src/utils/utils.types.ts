import { AvailableFlatNames } from 'types';

export type OnlyCourses = {
  [key in AvailableFlatNames]: number;
};

export type TGetCoursesForSelectedCurrencies = (
  exchangeCourse: OnlyCourses,
  selectedCurrencies: AvailableFlatNames[] | [],
) => OnlyCourses | undefined;

export type ShowNoConnectionAlert = (
  onPress?: (value?: any) => void,
  saveDate?: string | null,
) => void;

export type TGetSaveDateReadable = (currentDate: Date) => string;
