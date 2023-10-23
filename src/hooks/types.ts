import { Dispatch } from 'react';
import { ColorSchemeName, StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { Theme } from 'assets/colors';
import { AvailableFiatNames } from 'types';
import { StorageKeys } from 'utils';
import {
  OnlyCourses,
  TGetCoursesForSelectedCurrencies,
} from 'utils/utils.types';

import { TSetCoursesLoading } from './store/types';

type ReloadCourses = () => void;

export type UseGetCurrenciesExchangeCourse = () => {
  reloadCourses: ReloadCourses;
};

export type GetCoursesFromStorage = (onInit: boolean) => void;

export type UseGetCoursesFromStorage = (
  setExchangeCourse: Dispatch<OnlyCourses>,
) => GetCoursesFromStorage;

export type TUseReloadCourses = (
  setIsLoading: TSetCoursesLoading,
  getCoursesFromStorage: GetCoursesFromStorage,
) => ReloadCourses;

export type TUseFilteredCourseBySelectedCurrencies = (
  exchangeCourse: OnlyCourses | undefined,
  selectedCurrencies: AvailableFiatNames[] | [],
) => ReturnType<TGetCoursesForSelectedCurrencies>;

export type TUseTheme = <T extends StyleSheet.NamedStyles<T>>(
  mapStyles: (
    theme: Theme,
    insets: EdgeInsets,
    colorScheme: ColorSchemeName,
  ) => T,
) => T;

export type TActionsMap<T> = {
  [key in StorageKeys]?: T;
};
