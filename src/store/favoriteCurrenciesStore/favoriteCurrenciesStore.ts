import { l } from 'resources/localization';
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
      type: ENotificationType.MESSAGE,
      message: `${currencyName} ${l['message_add-to-favs']}`,
    });
  },

  removeFavoriteCurrency: (currName: TAvailableCurrenciesNames) => {
    delete favoriteCurrencyStore.favoriteCurrencies[currName];

    uiStoreActions.setNotificationData({
      type: ENotificationType.MESSAGE,
      message: `${currName} ${l['message_remove-favs']}`,
    });
  },
};

export const favoriteCurrencyStoreConfig = {
  store: favoriteCurrencyStore,
  whiteList,
};
