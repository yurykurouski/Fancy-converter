import AsyncStorage from '@react-native-async-storage/async-storage';
import { TRehydrateStateProps, TStoreConfig } from 'types';

import { PERSISTED_STORES } from './store.config';

const rehydrateState = ({ storeChunk, parsedValues }: TRehydrateStateProps) => {
  for (let key in parsedValues) {
    if (storeChunk.whiteList.includes(key)) {
      storeChunk.store[key] = parsedValues[key as PERSISTED_STORES];
    }
  }
};

export const rehydrateStore = async (storeConfig: TStoreConfig) => {
  const storesKeyValuePair = await AsyncStorage.multiGet(
    Object.values(PERSISTED_STORES),
  );

  if (storesKeyValuePair) {
    storesKeyValuePair.forEach(async ([storeName, values]) => {
      try {
        if (values) {
          const storeChunk = storeConfig[storeName as PERSISTED_STORES];
          const parsedValues = JSON.parse(values);

          rehydrateState({ storeChunk, parsedValues });
        }
      } catch (e) {
        console.error(e);
      }
    });
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
