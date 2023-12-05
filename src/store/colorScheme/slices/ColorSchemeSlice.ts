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
    switchColorScheme: (state, action: PayloadAction<EColorSchemeBehavior>) => {
      state.colorScheme = state.colorScheme === 'light' ? 'dark' : 'light';
      state.behavior = action.payload;
    },

    switchAppearanceBehavior: state => {
      state.behavior =
        state.behavior === EColorSchemeBehavior.AUTO
          ? EColorSchemeBehavior.MANUAL
          : EColorSchemeBehavior.AUTO;

      if (state.behavior === EColorSchemeBehavior.AUTO) {
        state.colorScheme = getCurrentColorTheme();
      }
    },
  },
});

export const { actions: ColorSchemeSliceActions } = ColorSchemeSlice;
