import { useEffect, useState } from 'react';

import { API_CITIES_GRODNO } from '../contsants';
import { currenciesService } from '../services/currencies-service';

export const useGetCurrenciesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [actualExchangeCourse, setActualExchangeCourse] = useState(null);

  console.log(isLoading);

  console.log(actualExchangeCourse);

  useEffect(() => {
    setIsLoading(true);

    currenciesService
      .getCoursesExchangeWithCity(API_CITIES_GRODNO)
      .then(value => setActualExchangeCourse(value))
      .then(() => setIsLoading(false));
  }, []);

  return [isLoading, actualExchangeCourse];
};
