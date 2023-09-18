import { useEffect } from 'react';
import { AppState } from 'react-native';
import { multiSetToStorage, StorageKeys } from 'utils';

export const useMultiSetToStorageOnBackground = (
  keyValuePairs: [StorageKeys, string][],
) => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        multiSetToStorage(keyValuePairs);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [keyValuePairs]);
};
