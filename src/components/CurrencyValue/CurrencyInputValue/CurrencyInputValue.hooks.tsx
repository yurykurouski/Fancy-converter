import { useCallback } from 'react';

export const useCurrencyInputHandlers = (
  setFocusedCurrencyValue,
  setValue,
  value,
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
    if (value === '0') {
      setValue('');
    }
    setFocusedCurrencyName(currencyCode);
  }, [currencyCode, setFocusedCurrencyName, setValue, value]);

  const onBlurHandler = useCallback(() => {
    if (!value) {
      setValue('0');
    }
  }, [setValue, value]);

  return [onChangeTextHandler, onFocusHandler, onBlurHandler];
};
