import { useGetCoursesFromStorage, useReloadCourses } from 'hooks';

import { useSetCoursesLoading, useSetExchangeCourses } from './store';
import { UseGetCurrenciesExchangeCourse } from './types';

//TODO: need refactor
export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  () => {
    const setExchangeCourses = useSetExchangeCourses();

    const setIsLoading = useSetCoursesLoading();

    const getCoursesFromStorage = useGetCoursesFromStorage(setExchangeCourses);

    const reloadCourses = useReloadCourses(setIsLoading, getCoursesFromStorage);

    return { reloadCourses };
  };
