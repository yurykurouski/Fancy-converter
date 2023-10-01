import { ColorSchemeName } from 'react-native';
import { ColorSchemeActions } from 'store/colorScheme/slices/ColorSchemeSlice';
import { DrawerSliceActions } from 'store/drawer/slices/DrawerSlice';
import { ExchangeCourseSliceActions } from 'store/exchangeCourses/slices/ExchangeCourseSlice';
import { SelectedCurrenciesActions } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';
import { AvailableCurrenciesNames, TDispatchCallback } from 'types';
import { OnlyCourses } from 'utils/utils.types';

export type TSetSelectedCurrencies = TDispatchCallback<
  AvailableCurrenciesNames[],
  typeof SelectedCurrenciesActions.setSelectedCurrencies.type
>;
export type TAddToSelectedCurrenciesInEdit = TDispatchCallback<
  AvailableCurrenciesNames,
  typeof SelectedCurrenciesActions.addToSelectedCurrenciesInEdit.type
>;
export type TRemoveFromSelectedCurrenciesInEdit = TDispatchCallback<
  AvailableCurrenciesNames,
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

export type TSetColorScheme = TDispatchCallback<
  ColorSchemeName,
  typeof ColorSchemeActions.setColorScheme.type
>;
export type TSetDrawerStatus = TDispatchCallback<
  boolean,
  typeof DrawerSliceActions.setDrawerOpenedState.type
>;

export type TSetOnBoardingStatus = (value: boolean) => void;
