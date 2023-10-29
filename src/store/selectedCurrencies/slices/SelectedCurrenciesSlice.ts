import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import availableCurrencies from 'resources/avaliable-currencies';
import {
  EAvailableFiatNames,
  ECurrencyType,
  TAvailableCurrencies,
} from 'types';

export type TSelectedCurrenciesSlice = {
  selectedCurrencies: EAvailableFiatNames[];
  selectedCurrenciesInEdit: EAvailableFiatNames[];
  isInEditMode: boolean;
  searchValue: string;
  activeCurrencyType: ECurrencyType;
  filteredCurrencies: TAvailableCurrencies;
};

const initialState: TSelectedCurrenciesSlice = {
  selectedCurrencies: [],
  selectedCurrenciesInEdit: [],
  isInEditMode: false,
  searchValue: '',
  activeCurrencyType: ECurrencyType.FIAT,
  filteredCurrencies: availableCurrencies,
};

export const SelectedCurrenciesSlice = createSlice({
  name: 'SelectedCurrencies',
  initialState,
  reducers: {
    setSelectedCurrencies: (
      state,
      action: PayloadAction<EAvailableFiatNames[]>,
    ) => {
      state.selectedCurrencies = action.payload;
    },

    setIsInEditMode: (state, action: PayloadAction<boolean>) => {
      state.isInEditMode = action.payload;
    },

    addToSelectedCurrenciesInEdit: (
      state,
      action: PayloadAction<EAvailableFiatNames>,
    ) => {
      state.selectedCurrenciesInEdit.push(action.payload);
    },
    removeFromSelectedCurrenciesInEdit: (
      state,
      action: PayloadAction<EAvailableFiatNames>,
    ) => {
      state.selectedCurrenciesInEdit = state.selectedCurrenciesInEdit.filter(
        el => el !== action.payload,
      );
    },
    clearSelectedCurrenciesInEdit: state => {
      state.selectedCurrenciesInEdit = [];
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
