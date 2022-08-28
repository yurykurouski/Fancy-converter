import { Animated } from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { GestureEvent } from 'react-native-gesture-handler';
import { ShowMessage } from 'context/MessageNotificationContext/WithNotification.types';
import { OnlyCourses } from 'utils/utils.types';

import { SWIPE_DIRECTIONS } from '../constants';

type ReloadCourses = () => void;

export type UseGetCurrenciesExchangeCourse = (
  startNotification: (message: string) => void,
) => {
  isLoading: boolean;
  exchangeCourse: OnlyCourses;
  reloadCourses: ReloadCourses;
};

export type GetCoursesFromStorage = (onInit: boolean) => void;

export type UseGetCoursesFromStorage = (
  setExchangeCourse: React.Dispatch<OnlyCourses>,
  startNotification: ShowMessage,
) => GetCoursesFromStorage;

export type UseReloadCourses = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setExchangeCourse: React.Dispatch<OnlyCourses>,
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

export type UseHorizontalGestureHandler = (
  animatedPosition: Animated.Value,
) => (event: GestureEvent<PanGestureHandlerEventPayload>) => void;
