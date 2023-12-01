import { SharedValue } from 'react-native-reanimated';
import {
  TAddToSelectedCurrenciesInEdit,
  TRemoveFromSelectedCurrenciesInEdit,
  TSetEditMode,
} from 'hooks/store/types';
import { TSelectedForEditSlice } from 'store/selectedForEdit/slices/SelectedForEditSlice';

export type TUseHandleLongPressParams = {
  addToCurrInEdit: TAddToSelectedCurrenciesInEdit;
  removeFromSelectedCurrenciesInEdit: TRemoveFromSelectedCurrenciesInEdit;
  selectedCurrencies: TSelectedForEditSlice['selectedCurrencies'];
  selectionModeShared: SharedValue<number>;
  setEditMode: TSetEditMode;
  selectedAmount: number;
  selectedDuringSwipeShared: SharedValue<number>;
};
