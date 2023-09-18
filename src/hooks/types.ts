import { Dispatch, SetStateAction } from 'react';
import { StyleSheet } from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { Theme } from 'assets/colors';
import { ShowMessage } from 'context/MessageNotificationContext/WithNotification.types';
import { OnlyCourses } from 'utils/utils.types';

import { SWIPE_DIRECTIONS } from '../constants';

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
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setExchangeCourse: Dispatch<OnlyCourses>,
  saveDate: string,
  getCoursesFromStorage: GetCoursesFromStorage,
  startNotification: ShowMessage,
) => ReloadCourses;

export type UseFilteredCourseBySelectedCurrencies = (
  exchangeCourse: OnlyCourses | null,
  selectedCurrencies: string[] | [],
) => OnlyCourses;

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
