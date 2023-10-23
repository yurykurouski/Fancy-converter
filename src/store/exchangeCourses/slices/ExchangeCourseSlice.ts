import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OnlyCourses } from 'utils/utils.types';

export type TExchangeCourseSlice = {
  exchangeCourses: OnlyCourses | undefined;
  isLoading: boolean;
  lastUpdated: number | undefined;
  requestError: string | undefined;
};

const initialState: TExchangeCourseSlice = {
  exchangeCourses: undefined,
  isLoading: false,
  lastUpdated: undefined,
  requestError: undefined,
};

export const ExchangeCourseSlice = createSlice({
  name: 'ExchangeCourses',
  initialState,
  reducers: {
    setExchangeCourses: (state, action: PayloadAction<OnlyCourses>) => {
      state.exchangeCourses = action.payload;
      state.lastUpdated = Date.now();
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setLastUpdateDate: (state, action: PayloadAction<number>) => {
      state.lastUpdated = action.payload;
    },

    setRequestError: (state, action: PayloadAction<string>) => {
      state.requestError = action.payload;
    },
    resetRequestError: state => {
      state.requestError = undefined;
    },
  },
});

export const { actions: ExchangeCourseSliceActions } = ExchangeCourseSlice;
