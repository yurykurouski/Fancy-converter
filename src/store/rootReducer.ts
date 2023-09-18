import { combineReducers } from '@reduxjs/toolkit';

import { ColorSchemeSlice } from './colorScheme/slices/ColorSchemeSlice';

export const rootReducer = combineReducers({
  colorScheme: ColorSchemeSlice.reducer,
});
