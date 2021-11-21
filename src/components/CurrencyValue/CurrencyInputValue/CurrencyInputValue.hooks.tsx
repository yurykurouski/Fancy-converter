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
  inputRef,
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

  const containerOnPressHandler = useCallback(
    () => inputRef.current.focus(),
    [inputRef],
  );

  return [onChangeTextHandler, onFocusHandler, containerOnPressHandler];
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
