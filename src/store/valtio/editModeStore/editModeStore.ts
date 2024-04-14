import { proxy } from 'valtio';

const initialState = {
  isInEditMode: false,
};

export const editModeStore = proxy(initialState);

export const editModeActions = {
  setEditMode: (isInEditMode: boolean) => {
    editModeStore.isInEditMode = isInEditMode;
  },
};
//TODO:
/* 
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
*/
