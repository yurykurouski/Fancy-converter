import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBootSplash from 'react-native-bootsplash';
import { configureStore, Middleware } from '@reduxjs/toolkit';
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

import { EditModeSlice } from './editMode/reducers/EditModeSlice';
import { FocusedCurrencySlice } from './focusedCurrency/slices/FocusedCurrencySlice';
import { SelectedCurrenciesSlice } from './selectedCurrencies/slices/SelectedCurrenciesSlice';
import { SelectedForEditSlice } from './selectedForEdit/slices/SelectedForEditSlice';
import { UISlice } from './ui/slices/UISlice';
import { rootReducer } from './rootReducer';

const middlewares: Middleware[] = [];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    UISlice.name,
    SelectedCurrenciesSlice.name,
    FocusedCurrencySlice.name,
    SelectedForEditSlice.name,
    EditModeSlice.name,
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
