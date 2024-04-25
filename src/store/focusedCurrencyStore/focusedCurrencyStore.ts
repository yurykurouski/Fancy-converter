import { TAvailableCurrenciesNames } from 'types';
import { proxy } from 'valtio';

type TFocusedCurrency = {
  focusedCurrencyName: TAvailableCurrenciesNames | undefined;
  focusedCurrencyValue: string;
};

const initialState: TFocusedCurrency = {
  focusedCurrencyName: undefined,
  focusedCurrencyValue: '',
};

export const focusedCurrencyStore = proxy(initialState);

export const focusedCurrencyActions = {
  setFocusedCurrencyName: (
    currencyName: TAvailableCurrenciesNames,
    value: string,
  ) => {
    focusedCurrencyStore.focusedCurrencyName = currencyName;
    focusedCurrencyStore.focusedCurrencyValue = value;
  },
  setFocusedCurrencyValue: (value: string) => {
    focusedCurrencyStore.focusedCurrencyValue = value;
  },
};
