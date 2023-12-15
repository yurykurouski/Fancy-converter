import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { ColorSchemeSlice } from './colorScheme/slices/ColorSchemeSlice';
import { EditModeSlice } from './editMode/reducers/EditModeSlice';
import { ExchangeCourseSlice } from './exchangeCourses/slices/ExchangeCourseSlice';
import { FavoriteCurrenciesSlice } from './favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import { FocusedCurrencySlice } from './focusedCurrency/slices/FocusedCurrencySlice';
import { OnBoardingStatusSlice } from './onboardingStatus/slices/OnBoardingStatusSlice';
import { SelectedCurrenciesSlice } from './selectedCurrencies/slices/SelectedCurrenciesSlice';
import { SelectedForEditSlice } from './selectedForEdit/slices/SelectedForEditSlice';
import { UISlice } from './ui/slices/UISlice';

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
  [ExchangeCourseSlice.name]: ExchangeCourseSlice.reducer,
  [FocusedCurrencySlice.name]: FocusedCurrencySlice.reducer,
  [OnBoardingStatusSlice.name]: OnBoardingStatusSlice.reducer,
  [FavoriteCurrenciesSlice.name]: FavoriteCurrenciesSlice.reducer,
  [UISlice.name]: UISlice.reducer,
  [EditModeSlice.name]: EditModeSlice.reducer,
  [ColorSchemeSlice.name]: ColorSchemeSlice.reducer,
});
