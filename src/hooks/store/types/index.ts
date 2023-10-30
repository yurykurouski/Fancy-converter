import { Action } from '@reduxjs/toolkit';
import { ExchangeCourseSliceActions } from 'store/exchangeCourses/slices/ExchangeCourseSlice';
import { FocusedCurrencySliceActions } from 'store/focusedCurrency/slices/FocusedCurrencySlice';
import { SelectedCurrenciesActions } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { UISliceActions } from 'store/ui/slices/UISlice';
import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  ECurrencyType,
  TDispatchCallback,
  TNotificationData,
} from 'types';
import { OnlyCourses } from 'utils/utils.types';

//SelectedCurrencies
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
export type TAddSelectedCurr = TDispatchCallback<
  EAvailableFiatNames | EAvailableCryptoNames,
  typeof SelectedCurrenciesActions.addSelectedCurr.type
>;
export type TRemoveSelectedCurr = TDispatchCallback<
  EAvailableFiatNames | EAvailableCryptoNames,
  typeof SelectedCurrenciesActions.removeSelectedCurr.type
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

//FocusedCurrency
export type TSetFocusedCurrencyValue = TDispatchCallback<
  string,
  typeof FocusedCurrencySliceActions.setFocusedCurrencyValue.type
>;
export type TSetFocusedCurrencyName = TDispatchCallback<
  { currencyCode: EAvailableFiatNames | EAvailableCryptoNames; value: string },
  typeof FocusedCurrencySliceActions.setFocusedCurrencyName.type
>;
