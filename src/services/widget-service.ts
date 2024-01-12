import { NativeModules } from 'react-native';
import { TAvailableCurrenciesNames } from 'types';

export const addToFavorites = (currencyName: TAvailableCurrenciesNames) => {
  NativeModules.WidgetWrapper.addToFavorites(currencyName);
};

export const removeFromFavorites = (
  currencyName: TAvailableCurrenciesNames,
) => {
  NativeModules.WidgetWrapper.removeFromFavorites(currencyName);
};
