import { StyleSheet } from 'react-native';
import { Theme } from 'assets/colors';

export type OnlyCourses = {
  [key: string]: number;
};

export type GetCoursesForSelectedCurrencies = (
  exchangeCourse: OnlyCourses,
  selectedCurrencies: string[] | [],
) => OnlyCourses;

export type ShowNoConnectionAlert = (
  onPress?: (value?: unknown) => void,
  saveDate?: string,
) => void;

export type CompareDateByHour = (
  currentDate: Date,
  lastUpdateDate: Date,
) => boolean;

export type GetIsCoursesCheckedLastHour = (
  currentDate: Date,
) => Promise<boolean>;

export type GetSaveDate = (currentDate: Date) => string;

export type WithTheme = <T extends StyleSheet.NamedStyles<T>>(
  mapStyles: (theme: Theme) => T,
) => T;
