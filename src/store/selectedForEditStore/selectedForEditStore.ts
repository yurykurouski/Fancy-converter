import { TAvailableCurrenciesNames, TSelectedCurrencies } from 'types';
import { proxy } from 'valtio';

import { editModeActions, editModeStore } from '../editModeStore';

export type TSelectedForEdit = {
  selectedCurrencies: TSelectedCurrencies;
  selectedAmount: number;
};

const initialState: TSelectedForEdit = {
  selectedCurrencies: {},
  selectedAmount: 0,
};

export const selectedForEditStore = proxy(initialState);

export const selectedForEditActions = {
  addToSelected: (currName: TAvailableCurrenciesNames) => {
    selectedForEditStore.selectedCurrencies[currName] = '1';
    selectedForEditStore.selectedAmount += 1;

    if (!editModeStore.isInEditMode) {
      editModeActions.setEditMode(true);
    }
  },
  clearSelected: (currName: TAvailableCurrenciesNames) => {
    delete selectedForEditStore.selectedCurrencies[currName];

    selectedForEditStore.selectedAmount -= 1;
  },
  deleteAllSelected: () => {
    selectedForEditStore.selectedCurrencies = {};
    selectedForEditStore.selectedAmount = 0;
  },
};
