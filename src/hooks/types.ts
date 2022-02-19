import { OnlyCourses } from 'utils/utils.types';

export type UseGetCurrenciesExchangeCourse = () => {
  isLoading: boolean;
  exchangeCourse: OnlyCourses;
  reloadCourses: () => void;
};
