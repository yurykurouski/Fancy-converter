import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Keyboard } from 'react-native';
import { INPUT_VALIDATION_REXEXP } from 'constants/constants';
import { l } from 'resources/localization';

import {
  UseConvertedValues,
  UseCurrencyInputHandlers,
  UseHandleDeletePress,
} from './CurrencyInputValue.types';

export const useCurrencyInputHandlers: UseCurrencyInputHandlers = ({
  setFocusedCurrencyValue,
  setFocusedCurrencyName,
  currencyCode,
  inputRef,
}) => {
  const [value, setValue] = useState<string>(null);

  const onChangeTextHandler = useCallback(
    text => {
      const withoutSpaces = text.replace(/\s+/g, '');

      if (INPUT_VALIDATION_REXEXP.test(withoutSpaces) || !withoutSpaces) {
        setFocusedCurrencyValue(withoutSpaces);
        setValue(withoutSpaces);
      }
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

  const containerOnPressHandler = useCallback(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return {
    onChangeTextHandler,
    onFocusHandler,
    containerOnPressHandler,
    value,
  };
};

export const useConvertedValues: UseConvertedValues = (
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
        ? null
        : (Number(focusedCurrencyValue) * coefficient).toFixed(2),
    [coefficient, focusedCurrencyValue, isFocused, value],
  );

  return calculatedValue === '0.00'
    ? null
    : isNaN(Number(calculatedValue)) && !isFocused
    ? l['currency_input.value.error_message']
    : calculatedValue;
};

export const useFormattedValue = (value: string) => {
  if (!value || isNaN(Number(value))) return value;

  const haveFraction = value.includes('.');
  const [integer, fraction] = value.split('.');

  const formatted = integer
    .split('')
    .reverse()
    .reduce((acc, value, index) => {
      return [...acc, index % 3 === 0 && index > 0 ? `${value} ` : value];
    }, []);

  return haveFraction
    ? `${formatted.reverse().join('')}.${fraction}`
    : `${formatted.reverse().join('')}`;
};

export const useKeyboardHandlers = (
  setIsKeyboardVisible: Dispatch<SetStateAction<boolean>>,
) =>
  useEffect(() => {
    const removeShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });

    const removeHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      removeShowListener.remove();
      removeHideListener.remove();
    };
  }, [setIsKeyboardVisible]);

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

    startNotification(
      `${currencyCode} ${l['currencies_main.currency_deleted']}`,
    );
  }, [
    currencyCode,
    selectedCurrencies,
    setIsReadyToDelete,
    setSelectedCurrencies,
    startNotification,
  ]);
