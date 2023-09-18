import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TOnBoardingStatusSlice = {
  isOnBoarded: boolean;
  isLoadingStatus: boolean;
};

const initialState: TOnBoardingStatusSlice = {
  isOnBoarded: undefined,
  isLoadingStatus: true,
};

export const OnBoardingStatusSlice = createSlice({
  name: 'OnBoardingStatus',
  initialState,
  reducers: {
    setIsOnBoarded: (state, action: PayloadAction<boolean>) => {
      state.isOnBoarded = action.payload;
    },

    setIsLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoadingStatus = action.payload;
    },
  },
});
