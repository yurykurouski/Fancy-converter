import { useCallback, useMemo } from 'react';
import { Keyboard, Vibration } from 'react-native';
import { useSelector } from 'react-redux';
import { INPUT_VALIDATION_REGEXP } from 'constants/constants';
import { l } from 'resources/localization';
import { selectFocusedCurrency } from 'store/focusedCurrency/selectors';

import {
  TUseConvertedValues,
  TUseCurrencyInputHandlers,
  TUseHandleLongPressParams,
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
      if (isInEditMode) return;

      const withoutSpaces = text.replace(/\s+/g, '') as string;

      if (INPUT_VALIDATION_REGEXP.test(withoutSpaces) || !withoutSpaces) {
        setFocusedCurrencyValue(withoutSpaces);
      }
    },
    [isInEditMode, setFocusedCurrencyValue],
  );

  const onFocusHandler = useCallback(
    (inputValue: string) => {
      if (isInEditMode) return;

      setFocusedCurrencyName({ currencyCode, value: inputValue });
    },
    [currencyCode, isInEditMode, setFocusedCurrencyName],
  );

  const containerOnPressHandler = useCallback(() => {
    if (isInEditMode) return;

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
  const { focusedCurrencyValue } = useSelector(selectFocusedCurrency);

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

  return haveFraction
    ? `${formatted.reverse().join('')}.${fraction}`
    : `${formatted.reverse().join('')}`;
};

export const useOnContainerPress = ({
  isInEditMode,
  currencyCode,
  addToCurrInEdit,
  selectedCurrenciesInEdit,
  removeFromSelectedCurrenciesInEdit,
}: TUseOnContainerPressParams) => {
  return () => {
    if (isInEditMode) {
      if (!selectedCurrenciesInEdit[currencyCode]) {
        addToCurrInEdit(currencyCode);
      } else {
        removeFromSelectedCurrenciesInEdit(currencyCode);
      }
    }
  };
};

export const useHandleLongPress = ({
  isInEditMode,
  addToCurrInEdit,
  currencyCode,
}: TUseHandleLongPressParams) =>
  useCallback(() => {
    if (!isInEditMode) {
      Vibration.vibrate(1);
      Keyboard.dismiss();

      addToCurrInEdit(currencyCode);
    }
  }, [addToCurrInEdit, currencyCode, isInEditMode]);
