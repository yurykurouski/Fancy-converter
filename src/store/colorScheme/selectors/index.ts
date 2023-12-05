import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store';

import { ColorSchemeSlice } from '../slices/ColorSchemeSlice';

export const selectColorStatus = (state: TState) =>
  state[ColorSchemeSlice.name];

export const selectColorSchemeState = createSelector(
  selectColorStatus,
  value => ({
    colorScheme: value.colorScheme,
    behavior: value.behavior,
  }),
);
