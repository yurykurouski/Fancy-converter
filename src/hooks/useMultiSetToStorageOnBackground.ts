import { useEffect } from 'react';
import { AppState } from 'react-native';
import { multiSetToStorage, StorageKeys } from 'utils';

export const useMultiSetToStorageOnBackground = (
  values: [StorageKeys, string][],
) => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        multiSetToStorage(values);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [values]);
};
