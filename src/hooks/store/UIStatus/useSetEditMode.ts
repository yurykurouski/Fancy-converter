import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { EditModeSliceActions } from 'store/editMode/reducers/EditModeSlice';

import { TSetEditMode } from '../types';

export const useSetEditMode = (): TSetEditMode => {
  const dispatch = useDispatch();

  return useCallback(
    (value: boolean) => dispatch(EditModeSliceActions.setEditMode(value)),
    [dispatch],
  );
};
