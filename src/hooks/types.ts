import { StartNotification } from 'context/MessageNotificationContext/WithNotification.types';
import { OnlyCourses } from 'utils/utils.types';

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
  startNotification: StartNotification,
) => GetCoursesFromStorage;

export type UseReloadCourses = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setExchangeCourse: React.Dispatch<OnlyCourses>,
  saveDate: string,
  getCoursesFromStorage: GetCoursesFromStorage,
  startNotification: StartNotification,
) => ReloadCourses;
