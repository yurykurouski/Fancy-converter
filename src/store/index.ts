import { configureStore } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';

import { rootReducer } from './rootReducer';

const middlewares = [createDebugger()];

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    ...middlewares,
  ],
});

export type TState = ReturnType<typeof store.getState>;

export default store;
