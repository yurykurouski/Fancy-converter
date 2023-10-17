import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TUISlice = {
  isDrawerOpened: boolean;
  bottomSheetIndex: number;
};

const initialState: TUISlice = {
  isDrawerOpened: false,
  bottomSheetIndex: 0,
};

export const UISlice = createSlice({
  name: 'UIStatus',
  initialState,
  reducers: {
    setDrawerOpenedState: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpened = action.payload;
    },

    setBottomSheetState: (state, action: PayloadAction<number>) => {
      state.bottomSheetIndex = action.payload;
    },
  },
});

export const { actions: UISliceActions } = UISlice;
