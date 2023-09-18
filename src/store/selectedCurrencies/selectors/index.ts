import { TState } from 'store';

export const selectSelectedCurrencies = (state: TState) =>
  state.selectedCurrencies;
