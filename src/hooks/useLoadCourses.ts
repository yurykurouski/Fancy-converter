import { useCallback } from 'react';
import { l } from 'resources/localization';
import { currenciesService } from 'services/currencies-service';
import { exchangeRatesActions } from 'store/exchangeRateStore';
import { uiStoreActions } from 'store/uiStore';
import { ENotificationType } from 'types';

export const useLoadCourses = () =>
  useCallback(
    async () =>
      currenciesService
        .getDailyCourses()
        .then(({ data: { rates } }) => {
          exchangeRatesActions.setExchangeRates(rates);
        })
        .catch(() =>
          uiStoreActions.setNotificationData({
            type: ENotificationType.ERROR,
            message: l['alert_message.something_wrong'],
          }),
        ),
    [],
  );
