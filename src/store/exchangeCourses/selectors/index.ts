import { TState } from 'store';

import { ExchangeCourseSlice } from '../slices/ExchangeCourseSlice';

export const selectExchangeCourses = (state: TState) =>
  state[ExchangeCourseSlice.name];
