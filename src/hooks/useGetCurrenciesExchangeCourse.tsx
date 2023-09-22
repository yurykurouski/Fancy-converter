import { useGetCoursesFromStorage, useReloadCourses } from 'hooks';

import { useSetCoursesLoading, useSetExchangeCourses } from './store';
import { UseGetCurrenciesExchangeCourse } from './types';

//TODO: need refactor
export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  startNotification => {
    const setExchangeCourses = useSetExchangeCourses();

    const setIsLoading = useSetCoursesLoading();

    const getCoursesFromStorage = useGetCoursesFromStorage(
      setExchangeCourses,
      startNotification,
    );

    const reloadCourses = useReloadCourses(
      setIsLoading,
      getCoursesFromStorage,
      startNotification,
    );

    // useEffect(() => {
    //   getIsCoursesCheckedLastHour(currentDate).then(isCheckedLastHour => {
    //     if (!isCheckedLastHour) {
    //       reloadCourses();
    //     } else {
    //       getCoursesFromStorage(true);
    //     }
    //   });
    // }, [currentDate, getCoursesFromStorage, reloadCourses]);

    return { reloadCourses };
  };
