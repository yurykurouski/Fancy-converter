import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TDrawerSlice = {
  isDrawerOpened: boolean;
};

const initialState: TDrawerSlice = {
  isDrawerOpened: false,
};

export const DrawerSlice = createSlice({
  name: 'DrawerStatus',
  initialState,
  reducers: {
    setDrawerOpenedState: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpened = action.payload;
    },
  },
});

export const { actions: DrawerSliceActions } = DrawerSlice;
