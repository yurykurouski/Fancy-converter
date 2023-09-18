import { ColorSchemeName } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentColorTheme } from 'utils';

export type TApplicationSlice = {
  colorScheme: ColorSchemeName;
};

const initialState: TApplicationSlice = {
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
