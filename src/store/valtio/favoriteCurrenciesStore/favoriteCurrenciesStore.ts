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

export const favoriteCurrencyStore = proxy(initialState);

export const favoriteCurrencyActions = {
  setFavoriteCurrency: (
    currencyName: TAvailableCurrenciesNames,
    currencyType: ECurrencyType,
  ) => {
    favoriteCurrencyStore.favoriteCurrencies[currencyName] = currencyType;

    uiStoreActions.setNotificationData({
      type: ENotificationType.ADD_FAVORITE,
      timeStamp: Date.now(),
      data: currencyName,
    });
  },

  removeFavoriteCurrency: (currName: TAvailableCurrenciesNames) => {
    delete favoriteCurrencyStore.favoriteCurrencies[currName];

    uiStoreActions.setNotificationData({
      type: ENotificationType.REMOVE_FAVORITE,
      timeStamp: Date.now(),
      data: currName,
    });
  },
};
