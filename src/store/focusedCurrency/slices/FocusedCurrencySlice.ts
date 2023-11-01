import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

export type TFocusedCurrency = {
  focusedCurrencyName: EAvailableFiatNames | EAvailableCryptoNames | undefined;
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
      action: PayloadAction<{
        currencyCode: EAvailableFiatNames | EAvailableCryptoNames;
        value: string;
      }>,
    ) => {
      state.focusedCurrencyName = action.payload.currencyCode;
      state.focusedCurrencyValue = action.payload.value;
    },
    setFocusedCurrencyValue: (state, action: PayloadAction<string>) => {
      state.focusedCurrencyValue = action.payload;
    },
  },
});

export const { actions: FocusedCurrencySliceActions } = FocusedCurrencySlice;
