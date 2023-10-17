import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableFlatNames } from 'types';

export type TFocusedCurrency = {
  focusedCurrencyName: AvailableFlatNames | undefined;
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
      action: PayloadAction<AvailableFlatNames>,
    ) => {
      state.focusedCurrencyName = action.payload;
    },
    setFocusedCurrencyValue: (state, action: PayloadAction<string>) => {
      state.focusedCurrencyValue = action.payload;
    },
  },
});

export const { actions: FocusedCurrencySliceActions } = FocusedCurrencySlice;
