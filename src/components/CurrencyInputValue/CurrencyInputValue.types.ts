import { RefObject } from 'react';
import { TextInput } from 'react-native';
import {
  EAvailableFiatNames,
  TAvailableCurrenciesNames,
  TSelectedCurrencies,
} from 'types';

export type Props = {
  currencyCode: EAvailableFiatNames;
};

export type OnChangeTextHandler = (text: string) => void;
export type OnFocusHandler = (text: string) => void;
export type ContainerOnPressHandler = () => void;

export type TUseCurrencyInputHandlers = (props: {
  setFocusedCurrencyValue: (value: string) => void;
  setFocusedCurrencyName: (
    currencyName: TAvailableCurrenciesNames,
    value: string,
  ) => void;
  currencyCode: EAvailableFiatNames;
  inputRef: RefObject<TextInput>;
  isInEditMode: boolean;
}) => {
  onChangeTextHandler: OnChangeTextHandler;
  onFocusHandler: OnFocusHandler;
  containerOnPressHandler: ContainerOnPressHandler;
};

export type TUseConvertedValues = (
  isFocused: boolean,
  course: number | undefined,
  focusedCurrencyCourse: number | undefined,
) => string;

export type TUseOnContainerPressParams = {
  isInEditMode: boolean;
  currencyCode: EAvailableFiatNames;
  addToCurrInEdit: (currName: TAvailableCurrenciesNames) => void;
  selectedCurrenciesInEdit: TSelectedCurrencies;
  removeFromSelectedCurrenciesInEdit: (
    currName: TAvailableCurrenciesNames,
  ) => void;
  selectedInEditAmount: number;
  setEditMode: (value: boolean) => void;
};
