import { combineReducers } from '@reduxjs/toolkit';

import { ColorSchemeSlice } from './colorScheme/slices/ColorSchemeSlice';
import { ExchangeCourseSlice } from './exchangeCourses/slices/ExchangeCourseSlice';
import { FocusedCurrencySlice } from './focusedCurrency/slices/FocusedCurrencySlice';
import { OnBoardingStatusSlice } from './onboardingStatus/slices/OnBoardingStatusSlice';
import { SelectedCurrenciesSlice } from './selectedCurrencies/slices/SelectedCurrenciesSlice';
import { UISlice } from './ui/slices/UISlice';

export const rootReducer = combineReducers({
  colorScheme: ColorSchemeSlice.reducer,
  selectedCurrencies: SelectedCurrenciesSlice.reducer,
  exchangeCourses: ExchangeCourseSlice.reducer,
  focusedCurrency: FocusedCurrencySlice.reducer,
  onBoardingStatus: OnBoardingStatusSlice.reducer,
  UIStatus: UISlice.reducer,
});
