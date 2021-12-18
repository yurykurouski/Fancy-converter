import { API_CITIES_GRODNO } from 'constants';
import { useCallback, useEffect, useState } from 'react';
import { ResultFromAPI } from 'types/avaliable-currencies';

import { currenciesService } from '../services/currencies-service';

export type UseGetCurrenciesExchangeCourse = () => {
  isLoading: boolean;
  actualExchangeCourse: ResultFromAPI[];
  reloadCourses: () => void;
};

export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [actualExchangeCourse, setActualExchangeCourse] = useState(null);

    const reloadCourses = useCallback(() => {
      setIsLoading(true);

      currenciesService
        .getCoursesExchangeWithCity(API_CITIES_GRODNO)
        .then(value => setActualExchangeCourse(value))
        .then(() => setIsLoading(false));
    }, []);

    useEffect(() => {
      reloadCourses();
    }, []);

    return { isLoading, actualExchangeCourse, reloadCourses };
  };
