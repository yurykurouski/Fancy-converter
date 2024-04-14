import { useGetCoursesFromStorage, useReloadCourses } from 'hooks';
import { exchangeRatesActions } from 'store/valtio/exchangeRateStore';

import { UseGetCurrenciesExchangeCourse } from './types';

//TODO: need refactor
export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  () => {
    const getCoursesFromStorage = useGetCoursesFromStorage(
      exchangeRatesActions.setExchangeRates,
    );

    const reloadCourses = useReloadCourses(
      exchangeRatesActions.setIsLoading,
      getCoursesFromStorage,
    );

    return { reloadCourses };
  };
