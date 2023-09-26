import { useEffect, useMemo } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { StorageKeys } from 'utils';

import { useMultiGet } from './useMultiGet';
import { useSetColorSchemeFromStorage } from './useSetColorSchemeFromStorage';
import { useSetExchangeCoursesFromStorage } from './useSetExchangeCoursesFromStorage';
import { useSetLastUpdateDateFromStorage } from './useSetLastUpdateDateFromStorage';
import { useSetOnboardingFromStorage } from './useSetOnboardingFromStorage';
import { useSetSelectedCurrenciesFromStorage } from './useSetSelectedCurrenciesFromStorage';

export const useInitDataFromStorage = () => {
  const setColorScheme = useSetColorSchemeFromStorage();
  const setOnBoardingStatus = useSetOnboardingFromStorage();
  const setSelectedCurrencies = useSetSelectedCurrenciesFromStorage();
  const setExchangeCourses = useSetExchangeCoursesFromStorage();
  const setLastUpdateDate = useSetLastUpdateDateFromStorage();

  const actionsMap = useMemo(
    () => ({
      [StorageKeys.COLOR_SCHEME]: setColorScheme,
      [StorageKeys.SELECTED_CURRENCIES]: setSelectedCurrencies,
      [StorageKeys.IS_ONBOARDED]: setOnBoardingStatus,
      [StorageKeys.LAST_COURSES_UPDATE]: setLastUpdateDate,
      [StorageKeys.EXCHANGE_COURSES]: setExchangeCourses,
    }),
    [
      setColorScheme,
      setExchangeCourses,
      setLastUpdateDate,
      setOnBoardingStatus,
      setSelectedCurrencies,
    ],
  );

  const multiGet = useMultiGet(actionsMap);

  useEffect(() => {
    multiGet().finally(() => {
      RNBootSplash.hide({ fade: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
