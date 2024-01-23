import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditModeSliceActions } from 'store/editMode/reducers/EditModeSlice';
import { TAvailableCurrenciesNames, TSelectedCurrencies } from 'types';

export type TSelectedForEditSlice = {
  selectedCurrencies: TSelectedCurrencies;
  selectedAmount: number;
};

const initialState: TSelectedForEditSlice = {
  selectedCurrencies: {},
  selectedAmount: 0,
};

export const SelectedForEditSlice = createSlice({
  name: 'SelectedForEdit',
  initialState,
  reducers: {
    addToSelected: (
      state,
      action: PayloadAction<TAvailableCurrenciesNames>,
    ) => {
      state.selectedCurrencies[action.payload] = 1;
      state.selectedAmount += 1;
    },
    clearSelected: (
      state,
      action: PayloadAction<TAvailableCurrenciesNames>,
    ) => {
      delete state.selectedCurrencies[action.payload];

      state.selectedAmount -= 1;
    },
    deleteAllSelected: state => {
      state.selectedCurrencies = {};
      state.selectedAmount = 0;
    },
  },
  extraReducers(builder) {
    builder.addCase(EditModeSliceActions.setEditMode, (state, action) => {
      if (!action.payload) {
        state.selectedCurrencies = {};
        state.selectedAmount = 0;
      }
    });
  },
});

export const { actions: SelectedForEditSliceActions } = SelectedForEditSlice;
