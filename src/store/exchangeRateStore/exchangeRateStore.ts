import { ENotificationType } from 'types';
import { OnlyCourses } from 'utils/utils.types';
import { proxy } from 'valtio';

import { uiStoreActions } from '../uiStore/uiStore';

type TExchangeRatesStore = {
  exchangeRates: OnlyCourses | undefined;
  isLoading: boolean;
  lastUpdated: number | undefined;
  requestError: string | undefined;
};

const initialState = {
  exchangeRates: undefined,
  isLoading: false,
  lastUpdated: undefined,
  requestError: undefined,
};

export const exchangeRatesStore = proxy<TExchangeRatesStore>(initialState);

export const exchangeRatesActions = {
  setExchangeRates: (rates: OnlyCourses) => {
    exchangeRatesStore.exchangeRates = rates;
    exchangeRatesStore.lastUpdated = Date.now();

    uiStoreActions.setNotificationData({
      type: ENotificationType.RATES_UPDATED,
      timeStamp: Date.now(),
      data: null,
    });
  },

  //TODO: move in separate store
  setIsLoading: (isLoading: boolean) => {
    exchangeRatesStore.isLoading = isLoading;
  },

  setLastUpdateDate: (date: number) => {
    exchangeRatesStore.lastUpdated = date;
  },
  //TODO: move in separate store
  setRequestError: (error: string) => {
    exchangeRatesStore.requestError = error;
  },
  resetRequestError: () => {
    exchangeRatesStore.requestError = undefined;
  },
};
