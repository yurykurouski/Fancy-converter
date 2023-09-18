import { combineReducers } from '@reduxjs/toolkit';

import { ColorSchemeSlice } from './colorScheme/slices/ColorSchemeSlice';
import { SelectedCurrenciesSlice } from './selectedCurrencies/slices/SelectedCurrenciesSlice';

export const rootReducer = combineReducers({
  colorScheme: ColorSchemeSlice.reducer,
  selectedCurrencies: SelectedCurrenciesSlice.reducer,
});
