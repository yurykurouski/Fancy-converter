import { ColorSchemeName } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EColorSchemeBehavior } from 'types';
import { getCurrentColorTheme } from 'utils';

export type TColorSchemeSlice = {
  colorScheme: ColorSchemeName;
  behavior: EColorSchemeBehavior;
};

const initialState: TColorSchemeSlice = {
  colorScheme: getCurrentColorTheme(),
  behavior: EColorSchemeBehavior.AUTO,
};

export const ColorSchemeSlice = createSlice({
  name: 'ColorScheme',
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorSchemeName>) => {
      state.colorScheme = action.payload;
    },

    setColorSchemeBehavior: (
      state,
      action: PayloadAction<EColorSchemeBehavior>,
    ) => {
      state.behavior = action.payload;
    },
  },
});

export const { actions: ColorSchemeActions } = ColorSchemeSlice;
