import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableFiatNames } from 'types';

export type TFocusedCurrency = {
  focusedCurrencyName: AvailableFiatNames | undefined;
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
      action: PayloadAction<AvailableFiatNames>,
    ) => {
      state.focusedCurrencyName = action.payload;
    },
    setFocusedCurrencyValue: (state, action: PayloadAction<string>) => {
      state.focusedCurrencyValue = action.payload;
    },
  },
});

export const { actions: FocusedCurrencySliceActions } = FocusedCurrencySlice;
