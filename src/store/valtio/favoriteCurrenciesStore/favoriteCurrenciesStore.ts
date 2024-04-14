import {
  ECurrencyType,
  ENotificationType,
  TAvailableCurrenciesNames,
} from 'types';
import { proxy } from 'valtio';

import { uiStoreActions } from '../uiStore';

export type TFocusedCurrency = {
  favoriteCurrencies: Partial<Record<TAvailableCurrenciesNames, ECurrencyType>>;
};

const initialState: TFocusedCurrency = {
  favoriteCurrencies: {},
};

export const focusedCurrencyStore = proxy(initialState);

export const focusedCurrencyActions = {
  setFavoriteCurrency: (
    currencyName: TAvailableCurrenciesNames,
    currencyType: ECurrencyType,
  ) => {
    focusedCurrencyStore.favoriteCurrencies[currencyName] = currencyType;

    uiStoreActions.setNotificationData({
      type: ENotificationType.ADD_FAVORITE,
      timeStamp: Date.now(),
      data: currencyName,
    });
  },

  removeFavoriteCurrency: (currName: TAvailableCurrenciesNames) => {
    delete focusedCurrencyStore.favoriteCurrencies[currName];

    uiStoreActions.setNotificationData({
      type: ENotificationType.REMOVE_FAVORITE,
      timeStamp: Date.now(),
      data: currName,
    });
  },
};
