import React from 'react';

export type Props = {
  currencyCode: string;
  focusedCurrencyName: string;
  focusedCurrencyValue: string;
  course: number;
  focusedCurrencyCourse: number;
  setFocusedCurrencyName: React.Dispatch<React.SetStateAction<string>>;
  setFocusedCurrencyValue: React.Dispatch<React.SetStateAction<string>>;
};

export type OnChangeTextHandler = (text: string) => void;
export type OnFocusHandler = (text: string) => void;
export type ContainerOnPressHandler = () => void;

export type UseCurrencyInputHandlers = (
  setFocusedCurrencyValue: React.Dispatch<React.SetStateAction<string>>,
  setValue: React.Dispatch<string>,
  setFocusedCurrencyName: React.Dispatch<React.SetStateAction<string>>,
  currencyCode: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputRef: React.MutableRefObject<any>,
) => [OnChangeTextHandler, OnFocusHandler, ContainerOnPressHandler];

export type UseConvertedValues = (
  isFocused: boolean,
  value: string | null,
  focusedCurrencyValue: string,
  course: number,
  focusedCurrencyCourse: number,
) => string;
