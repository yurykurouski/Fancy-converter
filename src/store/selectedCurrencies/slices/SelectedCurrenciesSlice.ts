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
  selectedCurrenciesInEdit: {
    [key in EAvailableFiatNames | EAvailableCryptoNames]?: number;
  };
  isInEditMode: boolean;
  searchValue: string;
  activeCurrencyType: ECurrencyType;
  filteredCurrencies: TAvailableCurrencies;
};

const initialState: TSelectedCurrenciesSlice = {
  currencies: {},
  selectedCurrenciesInEdit: {},
  isInEditMode: false,
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
    // changeCurrValue: (
    //   state,
    //   action: PayloadAction<{
    //     currencyCode: EAvailableFiatNames | EAvailableCryptoNames;
    //     value: string;
    //   }>,
    // ) => {
    //   const { currencyCode, value } = action.payload;

    //   state.currencies[currencyCode] = value;
    // },

    setIsInEditMode: (state, action: PayloadAction<boolean>) => {
      state.isInEditMode = action.payload;

      if (!action.payload) {
        state.selectedCurrenciesInEdit = {};
      }
    },

    addToSelectedCurrenciesInEdit: (
      state,
      action: PayloadAction<EAvailableFiatNames | EAvailableCryptoNames>,
    ) => {
      state.selectedCurrenciesInEdit[action.payload] = 1;

      if (!state.isInEditMode) {
        state.isInEditMode = true;
      }
    },
    removeFromSelectedCurrenciesInEdit: (
      state,
      action: PayloadAction<EAvailableFiatNames>,
    ) => {
      delete state.selectedCurrenciesInEdit[action.payload];

      if (!Object.keys(state.selectedCurrenciesInEdit).length) {
        state.isInEditMode = false;
      }
    },
    clearSelectedCurrenciesInEdit: state => {
      Object.keys(state.selectedCurrenciesInEdit).forEach(
        el => delete state.currencies[el],
      );

      state.selectedCurrenciesInEdit = {};
      state.isInEditMode = false;
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
