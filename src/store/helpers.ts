import AsyncStorage from '@react-native-async-storage/async-storage';
import { TStoreConfig } from 'types';

import { PERSISTED_STORES } from './store.config';

export async function rehydrateState(
  {
    store,
    whiteList,
  }: {
    whiteList: string[];
    store: { [key: string]: unknown };
  },
  storeName: PERSISTED_STORES,
) {
  const storedStateString = await AsyncStorage.getItem(storeName);

  if (storedStateString) {
    const values = JSON.parse(storedStateString);

    for (let key in values) {
      if (whiteList.includes(key)) {
        store[key] = values[key];
      }
    }
  }
}

export const rehydrateStore = async (storeConfig: TStoreConfig) => {
  for (let storeName in storeConfig) {
    try {
      await rehydrateState(
        storeConfig[storeName as PERSISTED_STORES],
        storeName as PERSISTED_STORES,
      );
    } catch (e) {
      console.error(e);
    }
  }
};

export const onBackground = async (storeConfig: TStoreConfig) => {
  const storages = Object.entries(storeConfig).reduce(
    (acc, [storeName, { store, whiteList }]) => {
      const valuesToPersist = whiteList.reduce(
        (values, stateKey) => ({
          ...values,
          [stateKey]: store[stateKey],
        }),
        {},
      );

      acc.push([storeName, JSON.stringify(valuesToPersist)]);
      return acc;
    },
    [] as [string, string][],
  );

  await AsyncStorage.multiSet(storages);
};
