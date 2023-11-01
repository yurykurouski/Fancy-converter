import { TState } from 'store';

import { SelectedCurrenciesSlice } from '../slices/SelectedCurrenciesSlice';

export const selectSelectedCurrencies = (state: TState) =>
  state[SelectedCurrenciesSlice.name];
