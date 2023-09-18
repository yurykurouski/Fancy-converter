import { useEffect, useMemo } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { StorageKeys } from 'utils';

import { useMultiGet } from './useMultiGet';
import { useSetColorScheme } from './useSetColorScheme';
import { useSetOnBoardingStatus } from './useSetOnBoardingStatus';
import { useSetSelectedCurrencies } from './useSetSelectedCurrencies';

export const useInitDataFromStorage = () => {
  const setColorScheme = useSetColorScheme();
  const setOnBoardingStatus = useSetOnBoardingStatus();
  const setSelectedCurrencies = useSetSelectedCurrencies();

  const actionsMap = useMemo(
    () => ({
      [StorageKeys.COLOR_SCHEME]: setColorScheme,
      [StorageKeys.SELECTED_CURRENCIES]: setSelectedCurrencies,
      [StorageKeys.IS_ONBOARDED]: setOnBoardingStatus,
    }),
    [setColorScheme, setOnBoardingStatus, setSelectedCurrencies],
  );

  const multiGet = useMultiGet<typeof actionsMap>(actionsMap);

  useEffect(() => {
    multiGet().finally(() => {
      RNBootSplash.hide({ fade: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
