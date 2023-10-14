import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ColorSchemeSlice } from 'store/colorScheme/slices/ColorSchemeSlice';
import { EColorSchemeBehavior } from 'types';

import { TSetColorSchemeBehavior } from '../types';

export const useSetColorSchemeBehavior = (): TSetColorSchemeBehavior => {
  const dispatch = useDispatch();

  return useCallback(
    (behavior: EColorSchemeBehavior) =>
      dispatch(ColorSchemeSlice.actions.setColorSchemeBehavior(behavior)),
    [dispatch],
  );
};
