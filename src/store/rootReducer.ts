import { combineReducers } from '@reduxjs/toolkit';

import { ColorSchemeSlice } from './colorScheme/slices/ColorSchemeSlice';
import { DrawerSlice } from './drawer/slices/DrawerSlice';
import { ExchangeCourseSlice } from './exchangeCourses/slices/ExchangeCourseSlice';
import { FocusedCurrencySlice } from './focusedCurrency/slices/FocusedCurrencySlice';
import { OnBoardingStatusSlice } from './onboardingStatus/slices/OnBoardingStatusSlice';
import { SelectedCurrenciesSlice } from './selectedCurrencies/slices/SelectedCurrenciesSlice';

export const rootReducer = combineReducers({
  colorScheme: ColorSchemeSlice.reducer,
  selectedCurrencies: SelectedCurrenciesSlice.reducer,
  exchangeCourses: ExchangeCourseSlice.reducer,
  focusedCurrency: FocusedCurrencySlice.reducer,
  onBoardingStatus: OnBoardingStatusSlice.reducer,
  drawerStatus: DrawerSlice.reducer,
});
