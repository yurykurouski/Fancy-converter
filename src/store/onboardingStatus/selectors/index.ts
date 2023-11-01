import { TState } from 'store';

import { OnBoardingStatusSlice } from '../slices/OnBoardingStatusSlice';

export const selectOnBoardingStatus = (state: TState) =>
  state[OnBoardingStatusSlice.name];
