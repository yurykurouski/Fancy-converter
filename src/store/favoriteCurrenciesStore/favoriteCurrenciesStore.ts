import { rehydrateState } from 'store/helpers';
import { PERSISTED_STORES } from 'store/store.config';
import {
  ECurrencyType,
  ENotificationType,
  TAvailableCurrenciesNames,
} from 'types';
import { proxy } from 'valtio';

import { uiStoreActions } from '../uiStore';

enum EFocusedCurrencyKeys {
  FAVORITE_CURRENCIES = 'favoriteCurrencies',
}

export type TFocusedCurrency = {
  [EFocusedCurrencyKeys.FAVORITE_CURRENCIES]: Partial<
    Record<TAvailableCurrenciesNames, ECurrencyType>
  >;
};

const initialState: TFocusedCurrency = {
  [EFocusedCurrencyKeys.FAVORITE_CURRENCIES]: {},
};

const whiteList = [EFocusedCurrencyKeys.FAVORITE_CURRENCIES];

export const favoriteCurrencyStore = proxy<TFocusedCurrency>(initialState);

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

  rehydrateState: async function () {
    await rehydrateState(
      favoriteCurrencyStore,
      PERSISTED_STORES.FAVORITE_CURRENCIES,
      whiteList,
    );
  },
};

export const favoriteCurrencyStoreConfig = {
  store: favoriteCurrencyStore,
  actions: favoriteCurrencyActions,
  whiteList,
};
