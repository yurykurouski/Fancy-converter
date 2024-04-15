import { Action } from '@reduxjs/toolkit';
import { SelectedCurrenciesActions } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
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
