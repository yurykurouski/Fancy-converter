import { useCallback, useEffect, useState } from 'react';
import { getOnlyCourses } from 'utils';
import { OnlyCourses } from 'utils/utils.types';

import { currenciesService } from '../services/currencies-service';

export type UseGetCurrenciesExchangeCourse = () => {
  isLoading: boolean;
  exchangeCourse: OnlyCourses;
  reloadCourses: () => void;
};

export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [exchangeCourse, setExchangeCourse] = useState(null);

    const reloadCourses = useCallback(() => {
      setIsLoading(true);

      currenciesService
        .getDailyCourses()
        .then(value => {
          const onlyCourses = getOnlyCourses(value);
          setExchangeCourse(onlyCourses);
        })
        .then(() => setIsLoading(false));
    }, []);

    useEffect(() => {
      reloadCourses();
    }, [reloadCourses]);

    return { isLoading, exchangeCourse, reloadCourses };
  };
