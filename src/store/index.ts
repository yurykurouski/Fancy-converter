import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBootSplash from 'react-native-bootsplash';
import { configureStore, Middleware } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { FocusedCurrencySlice } from './focusedCurrency/slices/FocusedCurrencySlice';
import { SelectedCurrenciesSlice } from './selectedCurrencies/slices/SelectedCurrenciesSlice';
import { UISlice } from './ui/slices/UISlice';
import { rootReducer } from './rootReducer';

const middlewares: Middleware[] = [];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    UISlice.name,
    SelectedCurrenciesSlice.name,
    FocusedCurrencySlice.name,
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ...middlewares,
  ],
});

export type TState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store, null, () =>
  RNBootSplash.hide({ fade: true }),
);
export default store;
