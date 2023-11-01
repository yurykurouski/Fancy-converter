import { TState } from 'store';

import { FocusedCurrencySlice } from '../slices/FocusedCurrencySlice';

export const selectFocusedCurrency = (state: TState) =>
  state[FocusedCurrencySlice.name];
