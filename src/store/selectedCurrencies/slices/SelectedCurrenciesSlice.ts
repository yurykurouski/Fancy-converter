import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TSelectedCurrenciesSlice = {
  selectedCurrencies: string[];
};

const initialState: TSelectedCurrenciesSlice = {
  selectedCurrencies: [],
};

export const SelectedCurrenciesSlice = createSlice({
  name: 'SelectedCurrencies',
  initialState,
  reducers: {
    setSelectedCurrencies: (state, action: PayloadAction<string[]>) => {
      state.selectedCurrencies = action.payload;
    },
  },
});

export const { actions: SelectedCurrenciesActions } = SelectedCurrenciesSlice;
