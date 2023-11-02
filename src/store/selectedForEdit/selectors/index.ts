import { TState } from 'store';

import { SelectedForEditSlice } from '../slices/SelectedForEditSlice';

export const selectSelectedInEdit = (state: TState) =>
  state[SelectedForEditSlice.name];
