import { TState } from 'store';

import { EditModeSlice } from '../reducers/EditModeSlice';

export const selectEditMode = (state: TState) => state[EditModeSlice.name];
