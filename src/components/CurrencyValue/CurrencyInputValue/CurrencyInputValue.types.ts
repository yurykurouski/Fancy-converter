import React from 'react';

export type Props = {
  currencyCode: string;
  focusedCurrencyName: string;
  focusedCurrencyValue: string;
  course: string;
  focusedCurrencyCourse: string;
  setFocusedCurrencyName: React.Dispatch<React.SetStateAction<string>>;
  setFocusedCurrencyValue: React.Dispatch<React.SetStateAction<string>>;
};

export type OnChangeTextHandler = (text: string) => void;
export type OnFocusHandler = (text: string) => void;
export type ContainerOnPressHandler = () => void;

export type UseCurrencyInputHandlers = (
  setFocusedCurrencyValue: React.Dispatch<React.SetStateAction<string>>,
  setValue: React.Dispatch<any>,
  setFocusedCurrencyName: React.Dispatch<React.SetStateAction<string>>,
  currencyCode: string,
  inputRef: React.MutableRefObject<any>,
) => [OnChangeTextHandler, OnFocusHandler, ContainerOnPressHandler];

export type UseConvertedValues = (
  isFocused: boolean,
  value: string | null,
  focusedCurrencyValue: string,
  course: string,
  focusedCurrencyCourse: string,
) => string;
