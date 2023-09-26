import { Dispatch } from 'react';
import { StyleSheet } from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { Theme } from 'assets/colors';
import { ShowMessage } from 'context/MessageNotificationContext/WithNotification.types';
import { AvailableCurrenciesNames } from 'types';
import { StorageKeys } from 'utils';
import {
  OnlyCourses,
  TGetCoursesForSelectedCurrencies,
} from 'utils/utils.types';

import { SWIPE_DIRECTIONS } from '../constants';

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

export type Handler = (
  e: HandlerStateChangeEvent<PanGestureHandlerEventPayload>,
) => void;

export type UseHandleSwipeDirection = (
  handler: () => void,
  direction: SWIPE_DIRECTIONS,
) => Handler;

export type TUseTheme = <T extends StyleSheet.NamedStyles<T>>(
  mapStyles: (theme: Theme) => T,
) => T;

// export type TUseMultiGet = <T>(actionsMap: T) => () => Promise<void>;
export type TActionsMap<T> = {
  [key in StorageKeys]?: T;
};

export type TUseMultiGet<T> = (
  actionsMap: TActionsMap<T>,
) => () => Promise<void>;
