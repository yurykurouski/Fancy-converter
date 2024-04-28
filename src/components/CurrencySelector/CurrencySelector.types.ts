import { SharedValue } from 'react-native-reanimated';
import { TSelectedForEdit } from 'store/selectedForEditStore/selectedForEditStore';
import { TAvailableCurrenciesNames } from 'types';

export type TUseHandleLongPressParams = {
  addToCurrInEdit: (currName: TAvailableCurrenciesNames) => void;
  removeFromSelectedCurrenciesInEdit: (
    currName: TAvailableCurrenciesNames,
  ) => void;
  selectedCurrencies: TSelectedForEdit['selectedCurrencies'];
  selectionModeShared: SharedValue<number>;
  setEditMode: (value: boolean) => void;
  selectedAmount: number;
  selectedDuringSwipeShared: SharedValue<number>;
};

export type TSortedWithFavs = {
  favs: TAvailableCurrenciesNames[];
  rest: TAvailableCurrenciesNames[];
};
