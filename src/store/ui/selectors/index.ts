import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store';

import { UISlice } from '../slices/UISlice';

export const selectUIStatus = (state: TState) => state[UISlice.name];

export const selectColorSchemeState = createSelector(selectUIStatus, value => ({
  colorScheme: value.colorScheme,
  behavior: value.behavior,
}));
export const selectBottomSheetIndex = createSelector(
  selectUIStatus,
  value => value.bottomSheetIndex,
);
