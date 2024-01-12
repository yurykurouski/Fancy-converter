import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToFavorites, removeFromFavorites } from 'services/widget-service';
import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  ECurrencyType,
} from 'types';

export type TFocusedCurrency = {
  favoriteCurrencies: Partial<
    Record<EAvailableFiatNames | EAvailableCryptoNames, ECurrencyType>
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
        currencyName: EAvailableFiatNames | EAvailableCryptoNames;
        currencyType: ECurrencyType;
      }>,
    ) => {
      state.favoriteCurrencies[action.payload.currencyName] =
        action.payload.currencyType;

      addToFavorites(action.payload.currencyName);
    },

    removeFavoriteCurrency: (
      state,
      action: PayloadAction<EAvailableFiatNames | EAvailableCryptoNames>,
    ) => {
      delete state.favoriteCurrencies[action.payload];

      removeFromFavorites(action.payload);
    },
  },
});

export const { actions: FavoriteCurrenciesSliceActions } =
  FavoriteCurrenciesSlice;
