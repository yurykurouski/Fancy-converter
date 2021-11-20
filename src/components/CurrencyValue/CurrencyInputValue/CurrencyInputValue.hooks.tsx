import { useCallback, useMemo } from 'react';

export const useCurrencyInputHandlers = (
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

  const onFocusHandler = useCallback(() => {
    setFocusedCurrencyName(currencyCode);
  }, [currencyCode, setFocusedCurrencyName]);

  return [onChangeTextHandler, onFocusHandler];
};

export const useConvertedValues = (
  isFocused,
  value,
  focusedCurrencyValue,
  course,
  focusedCurrencyCourse,
) => {
  const coefficient = focusedCurrencyCourse / course;

  const caclulatedValue = useMemo(
    () =>
      isFocused
        ? value
        : isNaN(coefficient)
        ? null
        : String(Number(focusedCurrencyValue) * coefficient),
    [coefficient, focusedCurrencyValue, isFocused, value],
  );

  return caclulatedValue;
};
