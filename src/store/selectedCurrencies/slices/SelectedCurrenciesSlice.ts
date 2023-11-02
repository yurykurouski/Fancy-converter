import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import availableCurrencies from 'resources/avaliable-currencies';
import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  ECurrencyType,
  TAvailableCurrencies,
} from 'types';

export type TSelectedCurrenciesSlice = {
  currencies: { [key in EAvailableFiatNames | EAvailableCryptoNames]?: string };
  searchValue: string;
  activeCurrencyType: ECurrencyType;
  filteredCurrencies: TAvailableCurrencies;
};

const initialState: TSelectedCurrenciesSlice = {
  currencies: {},
  searchValue: '',
  activeCurrencyType: ECurrencyType.FIAT,
  filteredCurrencies: availableCurrencies,
};

export const SelectedCurrenciesSlice = createSlice({
  name: 'SelectedCurrencies',
  initialState,
  reducers: {
    addSelectedCurr: (
      state,
      action: PayloadAction<EAvailableFiatNames | EAvailableCryptoNames>,
    ) => {
      state.currencies = {
        ...state.currencies,
        [action.payload]: '',
      };
    },
    removeSelectedCurr: (
      state,
      action: PayloadAction<EAvailableFiatNames | EAvailableCryptoNames>,
    ) => {
      delete state.currencies[action.payload];
    },

    deleteAllSelected: (state, action) => {
      //@ts-expect-error
      Object.keys(action.payload).forEach(el => delete state.currencies[el]);
    },

    searchCurrenciesValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    setFilteredCurrencies: (
      state,
      action: PayloadAction<{
        type: ECurrencyType;
        value: TAvailableCurrencies[ECurrencyType];
      }>,
    ) => {
      const { type, value } = action.payload;

      //@ts-expect-error
      state.filteredCurrencies[type] = value;
    },

    setActiveCurrencyType: (state, action: PayloadAction<ECurrencyType>) => {
      state.activeCurrencyType = action.payload;
    },
  },
});

export const { actions: SelectedCurrenciesActions } = SelectedCurrenciesSlice;
