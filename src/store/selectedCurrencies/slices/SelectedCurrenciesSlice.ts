import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableCurrenciesNames } from 'types';

export type TSelectedCurrenciesSlice = {
  selectedCurrencies: AvailableCurrenciesNames[];
  selectedCurrenciesInEdit: AvailableCurrenciesNames[];
  isInEditMode: boolean;
};

const initialState: TSelectedCurrenciesSlice = {
  selectedCurrencies: [],
  selectedCurrenciesInEdit: [],
  isInEditMode: false,
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
  },
});

export const { actions: SelectedCurrenciesActions } = SelectedCurrenciesSlice;
