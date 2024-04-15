import availableCurrencies from 'resources/avaliable-currencies';
import {
  EAvailableFiatNames,
  ECurrencyType,
  TAvailableCurrencies,
  TAvailableCurrenciesNames,
} from 'types';
import { proxy } from 'valtio';

type TSelectedCurrencies = {
  currencies: { [key in TAvailableCurrenciesNames]?: string };
  searchValue: string;
  activeCurrencyType: ECurrencyType;
  filteredCurrencies: TAvailableCurrencies;
};

const initialState: TSelectedCurrencies = {
  currencies: {
    [EAvailableFiatNames.EUR]: '',
    [EAvailableFiatNames.USD]: '',
    [EAvailableFiatNames.JPY]: '',
    [EAvailableFiatNames.GBP]: '',
    [EAvailableFiatNames.CAD]: '',
    [EAvailableFiatNames.CHF]: '',
  },
  searchValue: '',
  activeCurrencyType: ECurrencyType.FIAT,
  filteredCurrencies: availableCurrencies,
};

export const selectedCurrenciesStore = proxy(initialState);

export const selectedCurrenciesActions = {
  addSelectedCurr: (currName: TAvailableCurrenciesNames) => {
    selectedCurrenciesStore.currencies = {
      ...selectedCurrenciesStore.currencies,
      [currName]: '',
    };
  },
  removeSelectedCurr: (currName: TAvailableCurrenciesNames) => {
    delete selectedCurrenciesStore.currencies[currName];
  },

  deleteAllSelected: (currs: TSelectedCurrencies['currencies']) => {
    Object.keys(currs).forEach(
      //@ts-expect-error
      el => delete selectedCurrenciesStore.currencies[el],
    );
  },

  searchCurrenciesValue: (searchValue: string) => {
    selectedCurrenciesStore.searchValue = searchValue;
  },

  setFilteredCurrencies: (
    type: ECurrencyType,
    value: TAvailableCurrenciesNames[],
  ) => {
    //@ts-expect-error
    selectedCurrenciesStore.filteredCurrencies[type] = value;
  },

  setActiveCurrencyType: (currType: ECurrencyType) => {
    selectedCurrenciesStore.activeCurrencyType = currType;
  },
};
