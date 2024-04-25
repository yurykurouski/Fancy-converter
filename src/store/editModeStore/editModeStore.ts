import { proxy } from 'valtio';

import { selectedForEditActions } from '../selectedForEditStore';

const initialState = {
  isInEditMode: false,
};

export const editModeStore = proxy(initialState);

export const editModeActions = {
  setEditMode: (isInEditMode: boolean) => {
    editModeStore.isInEditMode = isInEditMode;

    if (!isInEditMode) {
      selectedForEditActions.deleteAllSelected();
    }
  },
};
