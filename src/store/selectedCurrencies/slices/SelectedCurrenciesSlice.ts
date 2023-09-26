import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableCurrenciesNames } from 'types';

export type TSelectedCurrenciesSlice = {
  selectedCurrencies: AvailableCurrenciesNames[];
};

const initialState: TSelectedCurrenciesSlice = {
  selectedCurrencies: [],
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
  },
});

export const { actions: SelectedCurrenciesActions } = SelectedCurrenciesSlice;
