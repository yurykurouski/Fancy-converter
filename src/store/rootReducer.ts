import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { SelectedCurrenciesSlice } from './selectedCurrencies/slices/SelectedCurrenciesSlice';

const persistConfigSelected = {
  key: 'selectedCurrencies',
  storage: AsyncStorage,
  blacklist: [
    'selectedCurrenciesInEdit',
    'selectedInEditAmount',
    'searchValue',
    'filteredCurrencies',
    'activeCurrencyType',
  ],
};

export const rootReducer = combineReducers({
  [SelectedCurrenciesSlice.name]: persistReducer(
    persistConfigSelected,
    SelectedCurrenciesSlice.reducer,
  ),
});
