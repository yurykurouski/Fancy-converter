import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TUISlice = {
  isDrawerOpened: boolean;
};

const initialState: TUISlice = {
  isDrawerOpened: false,
};

export const UISlice = createSlice({
  name: 'UIStatus',
  initialState,
  reducers: {
    setDrawerOpenedState: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpened = action.payload;
    },
  },
});

export const { actions: UISliceActions } = UISlice;
