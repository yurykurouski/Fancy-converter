import { useSelector } from 'react-redux';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectOnBoardingStatus } from 'store/onboardingStatus/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { StorageKeys } from 'utils';

export const useGetKeyValuePairs = () => {
  const { colorScheme } = useSelector(selectColorSchemeState);
  const { selectedCurrencies } = useSelector(selectSelectedCurrencies);
  const { isOnBoarded } = useSelector(selectOnBoardingStatus);
  const { exchangeCourses, lastUpdated } = useSelector(selectExchangeCourses);

  const keyValuePairs: [StorageKeys, string][] = [
    [StorageKeys.COLOR_SCHEME, colorScheme!],
    [StorageKeys.SELECTED_CURRENCIES, selectedCurrencies.join(',')],
    [StorageKeys.IS_ONBOARDED, JSON.stringify(isOnBoarded)],
    [StorageKeys.EXCHANGE_COURSES, JSON.stringify(exchangeCourses)],
    [StorageKeys.LAST_COURSES_UPDATE, JSON.stringify(lastUpdated)],
  ];

  return keyValuePairs;
};
