import { useEffect, useState } from 'react';
import { currenciesService } from '../services/currencies-service';

export const useGetCurrenciesList = currentCity => {
  const [isLoading, setIsLOading] = useState(false);
  const [actualExchangeCourse, setActualExchangeCourse] = useState();

  useEffect(() => {
    setIsLOading(true);

    currenciesService
      .getCoursesExchangeWithCity(currentCity)
      .then(value => setActualExchangeCourse(value))
      .then(() => setIsLOading(false));
  }, [currentCity]);

  return [isLoading, actualExchangeCourse];
};
