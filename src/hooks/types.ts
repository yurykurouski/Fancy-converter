import { Dispatch } from 'react';
import { ColorSchemeName, StyleSheet, ViewStyle } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { Theme } from 'assets/colors';
import { StorageKeys } from 'utils';
import { OnlyCourses } from 'utils/utils.types';

type ReloadCourses = () => void;

export type UseGetCurrenciesExchangeCourse = () => {
  reloadCourses: ReloadCourses;
};

export type GetCoursesFromStorage = (onInit: boolean) => void;

export type UseGetCoursesFromStorage = (
  setExchangeCourse: Dispatch<OnlyCourses>,
) => GetCoursesFromStorage;

export type TUseReloadCourses = (
  setIsLoading: (isLoading: boolean) => void,
  getCoursesFromStorage: GetCoursesFromStorage,
) => ReloadCourses;

export type TUseTheme = <T extends StyleSheet.NamedStyles<T>>(
  mapStyles: (props: {
    theme: Theme;
    insets: EdgeInsets;
    colorScheme: ColorSchemeName;
    elevation: { [key: number]: ViewStyle };
  }) => T,
) => T;

export type TActionsMap<T> = {
  [key in StorageKeys]?: T;
};

export type UseAppStateProps = {
  onForeground?: VoidFunction;
  onBackground?: VoidFunction;
};
