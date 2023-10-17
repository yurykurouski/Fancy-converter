import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableCurrenciesNames, ECurrencyType } from 'types';

export type TSelectedCurrenciesSlice = {
  selectedCurrencies: AvailableCurrenciesNames[];
  selectedCurrenciesInEdit: AvailableCurrenciesNames[];
  isInEditMode: boolean;
  searchValue: string;
  activeCurrencyType: ECurrencyType;
};

const initialState: TSelectedCurrenciesSlice = {
  selectedCurrencies: [],
  selectedCurrenciesInEdit: [],
  isInEditMode: false,
  searchValue: '',
  activeCurrencyType: ECurrencyType.FLAT,
};

export const SelectedCurrenciesSlice = createSlice({
  name: 'SelectedCurrencies',
  initialState,
  reducers: {
    setSelectedCurrencies: (
      state,
      action: PayloadAction<AvailableCurrenciesNames[]>,
    ) => {
      state.selectedCurrencies = action.payload;
    },

    setIsInEditMode: (state, action: PayloadAction<boolean>) => {
      state.isInEditMode = action.payload;
    },

    addToSelectedCurrenciesInEdit: (
      state,
      action: PayloadAction<AvailableCurrenciesNames>,
    ) => {
      state.selectedCurrenciesInEdit.push(action.payload);
    },
    removeFromSelectedCurrenciesInEdit: (
      state,
      action: PayloadAction<AvailableCurrenciesNames>,
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

    setActiveCurrencyType: (state, action: PayloadAction<ECurrencyType>) => {
      state.activeCurrencyType = action.payload;
    },
  },
});

export const { actions: SelectedCurrenciesActions } = SelectedCurrenciesSlice;
