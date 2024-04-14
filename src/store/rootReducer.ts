import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { EditModeSlice } from './editMode/reducers/EditModeSlice';
import { FavoriteCurrenciesSlice } from './favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import { FocusedCurrencySlice } from './focusedCurrency/slices/FocusedCurrencySlice';
import { OnBoardingStatusSlice } from './onboardingStatus/slices/OnBoardingStatusSlice';
import { SelectedCurrenciesSlice } from './selectedCurrencies/slices/SelectedCurrenciesSlice';
import { SelectedForEditSlice } from './selectedForEdit/slices/SelectedForEditSlice';

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
  [SelectedForEditSlice.name]: SelectedForEditSlice.reducer,
  [FocusedCurrencySlice.name]: FocusedCurrencySlice.reducer,
  [OnBoardingStatusSlice.name]: OnBoardingStatusSlice.reducer,
  [FavoriteCurrenciesSlice.name]: FavoriteCurrenciesSlice.reducer,
  [EditModeSlice.name]: EditModeSlice.reducer,
});
