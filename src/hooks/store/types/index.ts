import { Action } from '@reduxjs/toolkit';
import { EditModeSliceActions } from 'store/editMode/reducers/EditModeSlice';
import { FocusedCurrencySliceActions } from 'store/focusedCurrency/slices/FocusedCurrencySlice';
import { SelectedCurrenciesActions } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { SelectedForEditSliceActions } from 'store/selectedForEdit/slices/SelectedForEditSlice';
import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  ECurrencyType,
  TAvailableCurrenciesNames,
  TDispatchCallback,
} from 'types';

//SelectedCurrencies
export type TSetActiveCurrencyType = TDispatchCallback<
  ECurrencyType,
  typeof SelectedCurrenciesActions.setActiveCurrencyType.type
>;
export type TAddSelectedCurr = TDispatchCallback<
  TAvailableCurrenciesNames,
  typeof SelectedCurrenciesActions.addSelectedCurr.type
>;
export type TRemoveSelectedCurr = TDispatchCallback<
  TAvailableCurrenciesNames,
  typeof SelectedCurrenciesActions.removeSelectedCurr.type
>;
export type TSetFilteredCurrencies = (
  type: ECurrencyType,
  value: EAvailableFiatNames[] | EAvailableCryptoNames[],
) => Action<typeof SelectedCurrenciesActions.setFilteredCurrencies.type>;

//UIStatus

//FocusedCurrency
export type TSetFocusedCurrencyValue = TDispatchCallback<
  string,
  typeof FocusedCurrencySliceActions.setFocusedCurrencyValue.type
>;
export type TSetFocusedCurrencyName = TDispatchCallback<
  { currencyCode: TAvailableCurrenciesNames; value: string },
  typeof FocusedCurrencySliceActions.setFocusedCurrencyName.type
>;

//SelectedForEditSlice
export type TAddToSelectedCurrenciesInEdit = TDispatchCallback<
  TAvailableCurrenciesNames,
  typeof SelectedForEditSliceActions.addToSelected.type
>;
export type TRemoveFromSelectedCurrenciesInEdit = TDispatchCallback<
  TAvailableCurrenciesNames,
  typeof SelectedForEditSliceActions.clearSelected.type
>;

//EditMode
export type TSetEditMode = TDispatchCallback<
  boolean,
  typeof EditModeSliceActions.setEditMode.type
>;
