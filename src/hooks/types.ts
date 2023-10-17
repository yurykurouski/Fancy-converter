import { Dispatch } from 'react';
import { ColorSchemeName, StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { Theme } from 'assets/colors';
import { ShowMessage } from 'context/MessageNotificationContext/WithNotification.types';
import { AvailableCurrenciesNames } from 'types';
import { StorageKeys } from 'utils';
import {
  OnlyCourses,
  TGetCoursesForSelectedCurrencies,
} from 'utils/utils.types';

import { TSetCoursesLoading } from './store/types';

type ReloadCourses = () => void;

export type UseGetCurrenciesExchangeCourse = (
  startNotification: (message: string) => void,
) => {
  reloadCourses: ReloadCourses;
};

export type GetCoursesFromStorage = (onInit: boolean) => void;

export type UseGetCoursesFromStorage = (
  setExchangeCourse: Dispatch<OnlyCourses>,
  startNotification: ShowMessage,
) => GetCoursesFromStorage;

export type UseReloadCourses = (
  setIsLoading: TSetCoursesLoading,
  getCoursesFromStorage: GetCoursesFromStorage,
  startNotification: ShowMessage,
) => ReloadCourses;

export type TUseFilteredCourseBySelectedCurrencies = (
  exchangeCourse: OnlyCourses | undefined,
  selectedCurrencies: AvailableCurrenciesNames[] | [],
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
