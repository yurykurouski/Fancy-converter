import { EHapticType, TAvailableCurrenciesNames, TGroupByName } from 'types';

export * from './compareDate';
export * from './getCurrentColorTheme';
export * from './platform';
export * from './showNoConnectionAlert';
export * from './storage';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import { isIos } from './platform';

export const groupByName: TGroupByName<TAvailableCurrenciesNames> = data =>
  data.reduce(
    (acc: ReturnType<TGroupByName<TAvailableCurrenciesNames>>, el) => {
      const char = el[0];
      const prevVal = acc[char];

      return prevVal
        ? { ...acc, [char]: [...prevVal, el] }
        : { ...acc, [char]: [el] };
    },
    {},
  );

export const makeSectionsData = (
  data: ReturnType<TGroupByName<TAvailableCurrenciesNames>>,
) =>
  Object.keys(data).map(el => {
    return {
      title: el,
      data: data[el],
    };
  });

export const removeDuplicates = <T>(arr1: T[], arr2: T[]) => {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
};

const options = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: true,
};

export const triggerLongPressHaptic = () =>
  ReactNativeHapticFeedback.trigger(
    isIos ? EHapticType.IMPACT_LIGHT : EHapticType.LONG_PRESS_ANDROID,
    options,
  );
export const triggerSelectionHaptic = () =>
  ReactNativeHapticFeedback.trigger(
    isIos ? EHapticType.SELECTION_IOS : EHapticType.EFFECT_TICK_ANDROID,
    options,
  );
export const triggerWarningHaptic = () =>
  ReactNativeHapticFeedback.trigger(EHapticType.NOTIFICATION_WARNING, options);
