import { useCallback, useMemo } from 'react';
import { INPUT_VALIDATION_REGEXP } from 'constants/index';
import { l } from 'resources/localization';
import { focusedCurrencyStore } from 'store/focusedCurrencyStore';
import { useProxy } from 'valtio/utils';

import {
  TUseConvertedValues,
  TUseCurrencyInputHandlers,
  TUseOnContainerPressParams,
} from './CurrencyInputValue.types';

export const useCurrencyInputHandlers: TUseCurrencyInputHandlers = ({
  setFocusedCurrencyValue,
  setFocusedCurrencyName,
  currencyCode,
  inputRef,
  isInEditMode,
}) => {
  const onChangeTextHandler = useCallback(
    (text: string) => {
      if (isInEditMode) {
        return;
      }

      const withoutSpaces = text.replace(/\s+/g, '') as string;

      if (INPUT_VALIDATION_REGEXP.test(withoutSpaces) || !withoutSpaces) {
        setFocusedCurrencyValue(withoutSpaces);
      }
    },
    [isInEditMode, setFocusedCurrencyValue],
  );

  const onFocusHandler = useCallback(
    (inputValue: string) => {
      if (isInEditMode) {
        return;
      }

      setFocusedCurrencyName(currencyCode, inputValue);
    },
    [currencyCode, isInEditMode, setFocusedCurrencyName],
  );

  const containerOnPressHandler = useCallback(() => {
    if (isInEditMode) {
      return;
    }

    inputRef.current?.focus();
  }, [inputRef, isInEditMode]);

  return {
    onChangeTextHandler,
    onFocusHandler,
    containerOnPressHandler,
  };
};

export const useConvertedValues: TUseConvertedValues = (
  isFocused,
  course,
  focusedCurrencyCourse,
) => {
  const { focusedCurrencyValue } = useProxy(focusedCurrencyStore);

  const coefficient = Number(course) / Number(focusedCurrencyCourse);

  const calculatedValue = useMemo(
    () =>
      isFocused
        ? focusedCurrencyValue
        : isNaN(coefficient)
        ? ''
        : (Number(focusedCurrencyValue) * coefficient).toFixed(2),
    [coefficient, focusedCurrencyValue, isFocused],
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

  const reversedFormatted = [...formatted].reverse().join('');

  return haveFraction
    ? `${reversedFormatted}.${fraction}`
    : `${reversedFormatted}`;
};

export const useOnContainerPress = ({
  isInEditMode,
  currencyCode,
  addToCurrInEdit,
  selectedCurrenciesInEdit,
  removeFromSelectedCurrenciesInEdit,
  selectedInEditAmount,
  setEditMode,
}: TUseOnContainerPressParams) => {
  return () => {
    if (isInEditMode) {
      if (!selectedCurrenciesInEdit[currencyCode]) {
        addToCurrInEdit(currencyCode);
        selectedInEditAmount.value += 1;
      } else if (selectedInEditAmount.value > 1) {
        removeFromSelectedCurrenciesInEdit(currencyCode);
        selectedInEditAmount.value -= 1;
      } else {
        setEditMode(false);

        selectedInEditAmount.value = 0;
      }
    }
  };
};
