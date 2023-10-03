import { useCallback, useMemo, useState } from 'react';
import { Keyboard, Vibration } from 'react-native';
import { INPUT_VALIDATION_REGEXP } from 'constants/constants';
import { l } from 'resources/localization';

import {
  TUseConvertedValues,
  TUseCurrencyInputHandlers,
  TUseHandleLongPressParams,
  TUseOnContainerPressParams,
  UseHandleDeletePress,
} from './CurrencyInputValue.types';

export const useCurrencyInputHandlers: TUseCurrencyInputHandlers = ({
  setFocusedCurrencyValue,
  setFocusedCurrencyName,
  currencyCode,
  inputRef,
  isInEditMode,
}) => {
  const [value, setValue] = useState<string>('');

  const onChangeTextHandler = useCallback(
    (text: string) => {
      if (isInEditMode) return;

      const withoutSpaces = text.replace(/\s+/g, '') as string;

      if (INPUT_VALIDATION_REGEXP.test(withoutSpaces) || !withoutSpaces) {
        setFocusedCurrencyValue(withoutSpaces);
        setValue(withoutSpaces);
      }
    },
    [isInEditMode, setFocusedCurrencyValue],
  );

  const onFocusHandler = useCallback(
    (inputValue: string) => {
      if (isInEditMode) return;

      setFocusedCurrencyName(currencyCode);
      setFocusedCurrencyValue(inputValue);
      setValue(inputValue);
    },
    [
      currencyCode,
      isInEditMode,
      setFocusedCurrencyName,
      setFocusedCurrencyValue,
    ],
  );

  const containerOnPressHandler = useCallback(() => {
    if (isInEditMode) return;

    inputRef.current?.focus();
  }, [inputRef, isInEditMode]);

  return {
    onChangeTextHandler,
    onFocusHandler,
    containerOnPressHandler,
    value,
  };
};

export const useConvertedValues: TUseConvertedValues = (
  isFocused,
  value,
  focusedCurrencyValue,
  course,
  focusedCurrencyCourse,
) => {
  const coefficient = Number(course) / Number(focusedCurrencyCourse);

  const calculatedValue = useMemo(
    () =>
      isFocused
        ? value
        : isNaN(coefficient)
        ? ''
        : (Number(focusedCurrencyValue) * coefficient).toFixed(2),
    [coefficient, focusedCurrencyValue, isFocused, value],
  );

  return calculatedValue === '0.00'
    ? ''
    : isNaN(Number(calculatedValue)) && !isFocused
    ? l['currency_input.value.error_message']
    : calculatedValue;
};

export const useFormattedValue = (value: string | null): string => {
  if (!value || isNaN(Number(value))) {
    return '';
  }

  const haveFraction = value.includes('.');
  const [integer, fraction] = value.split('.');

  const formatted = integer
    .split('')
    .reverse()
    .reduce((acc: string[], char: string, index) => {
      return [...acc, index % 3 === 0 && index > 0 ? `${char} ` : char];
    }, []);

  return haveFraction
    ? `${formatted.reverse().join('')}.${fraction}`
    : `${formatted.reverse().join('')}`;
};

//odd
export const useHandleDeletePress = ({
  setIsReadyToDelete,
  selectedCurrencies,
  currencyCode,
  setSelectedCurrencies,
  startNotification,
}: UseHandleDeletePress) =>
  useCallback(() => {
    setIsReadyToDelete(false);

    const filteredCurrencies = selectedCurrencies.filter(
      el => el !== currencyCode,
    );
    setSelectedCurrencies(filteredCurrencies);

    startNotification?.(
      `${currencyCode} ${l['currencies_main.currency_deleted']}`,
    );
  }, [
    currencyCode,
    selectedCurrencies,
    setIsReadyToDelete,
    setSelectedCurrencies,
    startNotification,
  ]);

export const useOnContainerPress = ({
  isInEditMode,
  currencyCode,
  addToCurrInEdit,
  selectedCurrenciesInEdit,
  removeFromSelectedCurrenciesInEdit,
  setSelectedCurrInEditMode,
}: TUseOnContainerPressParams) => {
  return () => {
    if (isInEditMode) {
      if (!selectedCurrenciesInEdit.includes(currencyCode)) {
        addToCurrInEdit(currencyCode);
      } else {
        removeFromSelectedCurrenciesInEdit(currencyCode);

        if (selectedCurrenciesInEdit.length === 1) {
          setSelectedCurrInEditMode(false);
        }
      }
    }
  };
};

export const useHandleLongPress = ({
  isInEditMode,
  setSelectedCurrInEditMode,
  addToCurrInEdit,
  currencyCode,
}: TUseHandleLongPressParams) =>
  useCallback(() => {
    if (!isInEditMode) {
      Vibration.vibrate(1);
      Keyboard.dismiss();

      setSelectedCurrInEditMode(true);
      addToCurrInEdit(currencyCode);
    }
  }, [addToCurrInEdit, currencyCode, isInEditMode, setSelectedCurrInEditMode]);
