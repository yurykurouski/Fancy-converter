import { combineReducers } from '@reduxjs/toolkit';

import { ExchangeCourseSlice } from './exchangeCourses/slices/ExchangeCourseSlice';
import { FavoriteCurrenciesSlice } from './favoriteCurrencies/slices/FavoriteCurrenciesSlice';
import { FocusedCurrencySlice } from './focusedCurrency/slices/FocusedCurrencySlice';
import { OnBoardingStatusSlice } from './onboardingStatus/slices/OnBoardingStatusSlice';
import { SelectedCurrenciesSlice } from './selectedCurrencies/slices/SelectedCurrenciesSlice';
import { UISlice } from './ui/slices/UISlice';

export const rootReducer = combineReducers({
  selectedCurrencies: SelectedCurrenciesSlice.reducer,
  exchangeCourses: ExchangeCourseSlice.reducer,
  focusedCurrency: FocusedCurrencySlice.reducer,
  onBoardingStatus: OnBoardingStatusSlice.reducer,
  favoriteCurrencies: FavoriteCurrenciesSlice.reducer,
  UIStatus: UISlice.reducer,
});
