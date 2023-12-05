import { TState } from 'store';

import { UISlice } from '../slices/UISlice';

export const selectUIStatus = (state: TState) => state[UISlice.name];
