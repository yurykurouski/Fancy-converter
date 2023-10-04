import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TOnBoardingStatusSlice = {
  isOnBoarded: boolean | undefined;
};

const initialState: TOnBoardingStatusSlice = {
  isOnBoarded: undefined,
};

export const OnBoardingStatusSlice = createSlice({
  name: 'OnBoardingStatus',
  initialState,
  reducers: {
    setIsOnBoarded: (state, action: PayloadAction<boolean>) => {
      state.isOnBoarded = action.payload;
    },
  },
});
