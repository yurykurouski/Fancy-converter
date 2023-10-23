import { ColorSchemeName } from 'react-native';
import { Action } from '@reduxjs/toolkit';
import { ColorSchemeActions } from 'store/colorScheme/slices/ColorSchemeSlice';
import { ExchangeCourseSliceActions } from 'store/exchangeCourses/slices/ExchangeCourseSlice';
import { FocusedCurrencySliceActions } from 'store/focusedCurrency/slices/FocusedCurrencySlice';
import { SelectedCurrenciesActions } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { UISliceActions } from 'store/ui/slices/UISlice';
import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  EColorSchemeBehavior,
  ECurrencyType,
  TDispatchCallback,
  TNotificationData,
} from 'types';
import { OnlyCourses } from 'utils/utils.types';

//SelectedCurrencies
export type TSetSelectedCurrencies = TDispatchCallback<
  EAvailableFiatNames[],
  typeof SelectedCurrenciesActions.setSelectedCurrencies.type
>;
export type TAddToSelectedCurrenciesInEdit = TDispatchCallback<
  EAvailableFiatNames,
  typeof SelectedCurrenciesActions.addToSelectedCurrenciesInEdit.type
>;
export type TRemoveFromSelectedCurrenciesInEdit = TDispatchCallback<
  EAvailableFiatNames,
  typeof SelectedCurrenciesActions.removeFromSelectedCurrenciesInEdit.type
>;
export type TSetSelectedCurrEditMode = TDispatchCallback<
  boolean,
  typeof SelectedCurrenciesActions.setIsInEditMode.type
>;
export type TClearSelectedCurrenciesInEdit = TDispatchCallback<
  undefined,
  typeof SelectedCurrenciesActions.clearSelectedCurrenciesInEdit.type
>;
export type TSetActiveCurrencyType = TDispatchCallback<
  ECurrencyType,
  typeof SelectedCurrenciesActions.setActiveCurrencyType.type
>;
export type TSetFilteredCurrencies = (
  type: ECurrencyType,
  value: EAvailableFiatNames[] | EAvailableCryptoNames[],
) => Action<typeof SelectedCurrenciesActions.setFilteredCurrencies.type>;

//ExchangeCourses
export type TSetCoursesLoading = TDispatchCallback<
  boolean,
  typeof ExchangeCourseSliceActions.setIsLoading.type
>;
export type TSetExchangeCourses = TDispatchCallback<
  OnlyCourses,
  typeof ExchangeCourseSliceActions.setExchangeCourses.type
>;
export type TSetLastUpdateDate = TDispatchCallback<
  number,
  typeof ExchangeCourseSliceActions.setLastUpdateDate.type
>;
export type TSetCoursesRequestError = TDispatchCallback<
  string,
  typeof ExchangeCourseSliceActions.setRequestError.type
>;

//UIStatus
export type TSetDrawerStatus = TDispatchCallback<
  boolean,
  typeof UISliceActions.setDrawerOpenedState.type
>;
export type TSetBSStatus = TDispatchCallback<
  number,
  typeof UISliceActions.setBottomSheetState.type
>;
export type TSetNotificationData = TDispatchCallback<
  TNotificationData,
  typeof UISliceActions.setNotificationData.type
>;

//ColorScheme
export type TSetColorScheme = TDispatchCallback<
  ColorSchemeName,
  typeof ColorSchemeActions.setColorScheme.type
>;
export type TSetColorSchemeBehavior = TDispatchCallback<
  EColorSchemeBehavior,
  typeof ColorSchemeActions.setColorSchemeBehavior.type
>;

//FocusedCurrency
export type TSetFocusedCurrencyValue = TDispatchCallback<
  string,
  typeof FocusedCurrencySliceActions.setFocusedCurrencyValue.type
>;
export type TSetFocusedCurrencyName = TDispatchCallback<
  EAvailableFiatNames,
  typeof FocusedCurrencySliceActions.setFocusedCurrencyName.type
>;
