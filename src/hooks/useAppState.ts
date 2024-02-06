import { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

//NOTE: implementation from https://github.com/react-native-community/hooks/blob/main/src/useAppState.ts
export const useAppState = () => {
  const currentState = AppState.currentState;
  const [appState, setAppState] = useState(currentState);

  useEffect(() => {
    function onChange(newState: AppStateStatus) {
      setAppState(newState);
    }

    const subscription = AppState.addEventListener('change', onChange);

    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
};
