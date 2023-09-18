import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableCurrenciesNames } from 'types';

export type TFocusedCurrency = {
  focusedCurrencyName: string | AvailableCurrenciesNames;
  focusedCurrencyValue: string;
};

const initialState: TFocusedCurrency = {
  focusedCurrencyName: '',
  focusedCurrencyValue: '',
};

export const FocusedCurrencySlice = createSlice({
  name: 'FocusedCurrency',
  initialState,
  reducers: {
    setFocusedCurrencyName: (
      state,
      action: PayloadAction<AvailableCurrenciesNames>,
    ) => {
      state.focusedCurrencyName = action.payload;
    },
    setFocusedCurrencyValue: (state, action: PayloadAction<string>) => {
      state.focusedCurrencyValue = action.payload;
    },
  },
});
