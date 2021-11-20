import { useCallback, useMemo } from 'react';

import {
  UseConvertedValues,
  UseCurrencyInputHandlers,
} from './CurrencyInputValue.types';

export const useCurrencyInputHandlers: UseCurrencyInputHandlers = (
  setFocusedCurrencyValue,
  setValue,
  setFocusedCurrencyName,
  currencyCode,
) => {
  const onChangeTextHandler = useCallback(
    text => {
      setFocusedCurrencyValue(text);
      setValue(text);
    },
    [setFocusedCurrencyValue, setValue],
  );

  const onFocusHandler = useCallback(
    value => {
      setFocusedCurrencyName(currencyCode);
      setFocusedCurrencyValue(value);
      setValue(value);
    },
    [currencyCode, setFocusedCurrencyName, setFocusedCurrencyValue, setValue],
  );

  return [onChangeTextHandler, onFocusHandler];
};

export const useConvertedValues: UseConvertedValues = (
  isFocused,
  value,
  focusedCurrencyValue,
  course,
  focusedCurrencyCourse,
) => {
  const coefficient = Number(focusedCurrencyCourse) / Number(course);

  const caclulatedValue = useMemo(
    () =>
      isFocused
        ? value
        : isNaN(coefficient)
        ? null
        : (Number(focusedCurrencyValue) * coefficient).toFixed(2),
    [coefficient, focusedCurrencyValue, isFocused, value],
  );

  return caclulatedValue === '0.00' ? null : caclulatedValue;
};
