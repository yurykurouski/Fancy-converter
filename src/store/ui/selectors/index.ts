import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store';

export const selectUIStatus = (state: TState) => state.UIStatus;

export const selectColorSchemeState = createSelector(selectUIStatus, value => ({
  colorScheme: value.colorScheme,
  behavior: value.behavior,
}));
