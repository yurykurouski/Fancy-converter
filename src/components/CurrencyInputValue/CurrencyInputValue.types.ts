import { RefObject } from 'react';
import { TextInput } from 'react-native';
import {
  TAddToSelectedCurrenciesInEdit,
  TRemoveFromSelectedCurrenciesInEdit,
  TSetFocusedCurrencyName,
  TSetFocusedCurrencyValue,
} from 'hooks/store/types';
import { EAvailableCryptoNames, EAvailableFiatNames } from 'types';

export type Props = {
  currencyCode: EAvailableFiatNames;
};

export type OnChangeTextHandler = (text: string) => void;
export type OnFocusHandler = (text: string) => void;
export type ContainerOnPressHandler = () => void;

export type TUseCurrencyInputHandlers = (props: {
  setFocusedCurrencyValue: TSetFocusedCurrencyValue;
  setFocusedCurrencyName: TSetFocusedCurrencyName;
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
  focusedCurrencyValue: string,
  course: number | undefined,
  focusedCurrencyCourse: number | undefined,
) => string;

export type TUseOnContainerPressParams = {
  isInEditMode: boolean;
  currencyCode: EAvailableFiatNames;
  addToCurrInEdit: TAddToSelectedCurrenciesInEdit;
  selectedCurrenciesInEdit: {
    [key in EAvailableFiatNames | EAvailableCryptoNames]?: number;
  };
  removeFromSelectedCurrenciesInEdit: TRemoveFromSelectedCurrenciesInEdit;
};

export type TUseHandleLongPressParams = {
  isInEditMode: boolean;
  addToCurrInEdit: TAddToSelectedCurrenciesInEdit;
  currencyCode: EAvailableFiatNames;
};
