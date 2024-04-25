import { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

import { UseAppStateProps } from './types';

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

export const useAppStateV2 = ({
  onForeground,
  onBackground,
}: UseAppStateProps = {}) => {
  const appState = useRef(AppState.currentState);
  const [state, setState] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const isAppInForeground =
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active';
      if (isAppInForeground && onForeground) {
        onForeground();
      } else {
        onBackground && onBackground();
      }

      appState.current = nextAppState;
      setState(appState.current);
    });
    return () => {
      subscription.remove();
    };
  }, [state, onForeground, onBackground]);

  return state;
};
