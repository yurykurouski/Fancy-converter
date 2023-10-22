import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableCryptoNames, AvailableFiatNames, ECurrencyType } from 'types';

export type TFocusedCurrency = {
  favoriteCurrencies: Partial<
    Record<AvailableFiatNames | AvailableCryptoNames, ECurrencyType>
  >;
};

const initialState: TFocusedCurrency = {
  favoriteCurrencies: {},
};

export const FavoriteCurrenciesSlice = createSlice({
  name: 'FavoriteCurrencies',
  initialState,
  reducers: {
    setFavoriteCurrency: (
      state,
      action: PayloadAction<{
        currencyName: AvailableFiatNames | AvailableCryptoNames;
        currencyType: ECurrencyType;
      }>,
    ) => {
      state.favoriteCurrencies[action.payload.currencyName] =
        action.payload.currencyType;
    },

    removeFavoriteCurrency: (
      state,
      action: PayloadAction<AvailableFiatNames | AvailableCryptoNames>,
    ) => {
      delete state.favoriteCurrencies[action.payload];
    },
  },
});

export const { actions: FavoriteCurrenciesSliceActions } =
  FavoriteCurrenciesSlice;
