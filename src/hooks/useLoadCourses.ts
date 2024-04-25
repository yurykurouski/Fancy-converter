import { useCallback } from 'react';
import { currenciesService } from 'services/currencies-service';
import { exchangeRatesActions } from 'store/exchangeRateStore';

export const useLoadCourses = () =>
  useCallback(
    async () =>
      currenciesService
        .getDailyCourses()
        .then(({ data: { rates } }) => {
          exchangeRatesActions.setExchangeRates(rates);
        })
        .catch(exchangeRatesActions.setRequestError),
    [],
  );
