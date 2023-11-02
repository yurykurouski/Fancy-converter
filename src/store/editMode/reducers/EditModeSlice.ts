import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedForEditSliceActions } from 'store/selectedForEdit/slices/SelectedForEditSlice';

export type TEditModeSlice = {
  isInEditMode: boolean;
};

const initialState: TEditModeSlice = {
  isInEditMode: false,
};

export const EditModeSlice = createSlice({
  name: 'EditMode',
  initialState,
  reducers: {
    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.isInEditMode = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(SelectedForEditSliceActions.addToSelected, state => {
        if (!state.isInEditMode) {
          state.isInEditMode = true;
        }
      })
      .addCase(SelectedForEditSliceActions.deleteAllSelected, state => {
        state.isInEditMode = false;
      });
  },
});

export const { actions: EditModeSliceActions } = EditModeSlice;
