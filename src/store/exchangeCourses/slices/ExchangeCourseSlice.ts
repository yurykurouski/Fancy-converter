import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OnlyCourses } from 'utils/utils.types';

export type TExchangeCourseSlice = {
  exchangeCourses: OnlyCourses;
  isLoading: boolean;
  lastUpdated: string;
};

const initialState: TExchangeCourseSlice = {
  exchangeCourses: undefined,
  isLoading: false,
  lastUpdated: undefined,
};

export const ExchangeCourseSlice = createSlice({
  name: 'ExchangeCourses',
  initialState,
  reducers: {
    setExchangeCourses: (state, action: PayloadAction<OnlyCourses>) => {
      state.exchangeCourses = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setLastUpdateDate: (state, action: PayloadAction<string>) => {
      state.lastUpdated = action.payload;
    },
  },
});

export const { actions: ExchangeCourseSliceActions } = ExchangeCourseSlice;
