import { ColorSchemeName } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentColorTheme } from 'utils';

export type TColorSchemeSlice = {
  colorScheme: ColorSchemeName;
};

const initialState: TColorSchemeSlice = {
  colorScheme: getCurrentColorTheme(),
};

export const ColorSchemeSlice = createSlice({
  name: 'ColorScheme',
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorSchemeName>) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { actions: ColorSchemeActions } = ColorSchemeSlice;
