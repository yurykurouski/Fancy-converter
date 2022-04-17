import { OnlyCourses } from 'utils/utils.types';

export type UseGetCurrenciesExchangeCourse = (
  startNotification: (message: string) => void,
) => {
  isLoading: boolean;
  exchangeCourse: OnlyCourses;
  reloadCourses: () => void;
};

export enum NOTIFICATION_MESSAGES {
  FROM_STORAGE = 'Courses were settled from cache',
  FROM_NETWORK = 'Courses were updated',
}
