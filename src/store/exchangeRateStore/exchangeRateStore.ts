import { ENotificationType } from 'types';
import { OnlyCourses } from 'utils/utils.types';
import { proxy } from 'valtio';

import { uiStoreActions } from '../uiStore/uiStore';

enum EExchangeRateKeys {
  EXCHANGE_RATES = 'exchangeRates',
  LAST_UPDATED = 'lastUpdated',
  IS_LOADING = 'isLoading',
  REQUEST_ERROR = 'requestError',
}

type TExchangeRatesStore = {
  [EExchangeRateKeys.EXCHANGE_RATES]: OnlyCourses | undefined;
  [EExchangeRateKeys.IS_LOADING]: boolean;
  [EExchangeRateKeys.LAST_UPDATED]: number | undefined;
  [EExchangeRateKeys.REQUEST_ERROR]: string | undefined;
};

const initialState = {
  [EExchangeRateKeys.EXCHANGE_RATES]: undefined,
  [EExchangeRateKeys.IS_LOADING]: false,
  [EExchangeRateKeys.LAST_UPDATED]: undefined,
  [EExchangeRateKeys.REQUEST_ERROR]: undefined,
};

const whiteList = [
  EExchangeRateKeys.LAST_UPDATED,
  EExchangeRateKeys.EXCHANGE_RATES,
];

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

export const exchangeRateStoreConfig = {
  store: exchangeRatesStore,
  whiteList,
};
