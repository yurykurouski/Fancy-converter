import { TState } from 'store';

export const selectFavoriteCurrencies = (state: TState) =>
  state.favoriteCurrencies;
