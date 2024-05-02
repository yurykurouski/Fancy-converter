import { DEFAULT_CURRENCIES } from 'constants';
import availableCurrencies from 'resources/avaliable-currencies';
import { editModeActions } from 'store/editModeStore';
import {
  ECurrencyType,
  TAvailableCurrencies,
  TAvailableCurrenciesNames,
  TSelectedCurrencies as SelectedCurrenciesType,
} from 'types';
import { proxy } from 'valtio';

import { getInitCurrencies } from './utils';

enum ESelectedCurrenciesKeys {
  CURRENCIES = 'currencies',
  SEARCH_VALUE = 'searchValue',
  ACTIVE_CURR_TYPE = 'activeCurrencyType',
  FILTERED_CURRENCIES = 'filteredCurrencies',
}

type TSelectedCurrencies = {
  [ESelectedCurrenciesKeys.CURRENCIES]: SelectedCurrenciesType;
  [ESelectedCurrenciesKeys.SEARCH_VALUE]: string;
  [ESelectedCurrenciesKeys.ACTIVE_CURR_TYPE]: ECurrencyType;
  [ESelectedCurrenciesKeys.FILTERED_CURRENCIES]: TAvailableCurrencies;
};

const initialState: TSelectedCurrencies = {
  [ESelectedCurrenciesKeys.CURRENCIES]: {
    ...getInitCurrencies(),
    ...DEFAULT_CURRENCIES,
  },
  [ESelectedCurrenciesKeys.SEARCH_VALUE]: '',
  [ESelectedCurrenciesKeys.ACTIVE_CURR_TYPE]: ECurrencyType.FIAT,
  [ESelectedCurrenciesKeys.FILTERED_CURRENCIES]: availableCurrencies,
};

const whiteList = [ESelectedCurrenciesKeys.CURRENCIES];

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
    editModeActions.setEditMode(false);
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

export const selectedCurrenciesStoreConfig = {
  store: selectedCurrenciesStore,
  whiteList,
};
