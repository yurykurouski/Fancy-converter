import { useEffect } from 'react';
import { AppState } from 'react-native';
import { multiSetToStorage } from 'utils';

import { useGetKeyValuePairs } from './useGetKeyValuePairs';

export const useMultiSetToStorageOnBackground = () => {
  const keyValuePairs = useGetKeyValuePairs();

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
