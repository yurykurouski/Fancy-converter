import { useEffect } from 'react';
import { AppState } from 'react-native';
import { multiSetToStorage } from 'utils';

export const useMultiSetToStorageOnBackground = (
  ...args: [string, string][]
) => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        multiSetToStorage(args);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [args]);
};
