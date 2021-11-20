import { useEffect, useState } from 'react';
import { ResultFromAPI } from 'types/avaliable-currencies';

import { API_CITIES_GRODNO } from '../contsants';
import { currenciesService } from '../services/currencies-service';

export type UseGetCurrenciesExchangeCourse = () => {
  isLoading: boolean;
  actualExchangeCourse: ResultFromAPI[];
};

export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [actualExchangeCourse, setActualExchangeCourse] = useState(null);

    useEffect(() => {
      setIsLoading(true);

      currenciesService
        .getCoursesExchangeWithCity(API_CITIES_GRODNO)
        .then(value => setActualExchangeCourse(value))
        .then(() => setIsLoading(false));
    }, []);

    return { isLoading, actualExchangeCourse };
  };
