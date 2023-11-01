import { TState } from 'store';

import { FavoriteCurrenciesSlice } from '../slices/FavoriteCurrenciesSlice';

export const selectFavoriteCurrencies = (state: TState) =>
  state[FavoriteCurrenciesSlice.name];
