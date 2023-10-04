import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableCurrenciesNames } from 'types';

export type TFocusedCurrency = {
  focusedCurrencyName: AvailableCurrenciesNames | undefined;
  focusedCurrencyValue: string;
};

const initialState: TFocusedCurrency = {
  focusedCurrencyName: undefined,
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

export const { actions: FocusedCurrencySliceActions } = FocusedCurrencySlice;
