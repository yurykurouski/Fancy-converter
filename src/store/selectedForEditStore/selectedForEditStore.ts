import { TAvailableCurrenciesNames, TSelectedCurrencies } from 'types';
import { proxy } from 'valtio';

import { editModeActions, editModeStore } from '../editModeStore';

export type TSelectedForEdit = {
  selectedCurrencies: TSelectedCurrencies;
};

const initialState: TSelectedForEdit = {
  selectedCurrencies: {},
};

export const selectedForEditStore = proxy(initialState);

export const selectedForEditActions = {
  addToSelected: (currName: TAvailableCurrenciesNames) => {
    selectedForEditStore.selectedCurrencies[currName] = '1';

    if (!editModeStore.isInEditMode) {
      editModeActions.setEditMode(true);
    }
  },
  clearSelected: (currName: TAvailableCurrenciesNames) => {
    delete selectedForEditStore.selectedCurrencies[currName];
  },
  deleteAllSelected: () => {
    selectedForEditStore.selectedCurrencies = {};
  },
};
