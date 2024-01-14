import { NativeModules } from 'react-native';
import { TAvailableCurrenciesNames } from 'types';

export const addToSelected = (currencyName: TAvailableCurrenciesNames) => {
  NativeModules.WidgetWrapper.addToSelected(currencyName);
};

export const removeFromSelected = (currencyName: TAvailableCurrenciesNames) => {
  NativeModules.WidgetWrapper.removeFromSelected(currencyName);
};

export const setDefaults = (currencies: string) => {
  NativeModules.WidgetWrapper.setDefaultSelected(currencies);
};

export const deleteSomeSelected = (currencies: string) => {
  NativeModules.WidgetWrapper.deleteSomeSelected(currencies);
};
