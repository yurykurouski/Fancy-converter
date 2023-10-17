import { RefObject } from 'react';
import { TextInput } from 'react-native';
import {
  TAddToSelectedCurrenciesInEdit,
  TRemoveFromSelectedCurrenciesInEdit,
  TSetFocusedCurrencyName,
  TSetFocusedCurrencyValue,
  TSetSelectedCurrEditMode,
} from 'hooks/store/types';
import { AvailableFlatNames } from 'types';

export type Props = {
  currencyCode: AvailableFlatNames;
};

export type OnChangeTextHandler = (text: string) => void;
export type OnFocusHandler = (text: string) => void;
export type ContainerOnPressHandler = () => void;

export type TUseCurrencyInputHandlers = (props: {
  setFocusedCurrencyValue: TSetFocusedCurrencyValue;
  setFocusedCurrencyName: TSetFocusedCurrencyName;
  currencyCode: AvailableFlatNames;
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
  currencyCode: AvailableFlatNames;
  addToCurrInEdit: TAddToSelectedCurrenciesInEdit;
  selectedCurrenciesInEdit: AvailableFlatNames[];
  removeFromSelectedCurrenciesInEdit: TRemoveFromSelectedCurrenciesInEdit;
  setSelectedCurrInEditMode: TSetSelectedCurrEditMode;
};

export type TUseHandleLongPressParams = {
  isInEditMode: boolean;
  setSelectedCurrInEditMode: TSetSelectedCurrEditMode;
  addToCurrInEdit: TAddToSelectedCurrenciesInEdit;
  currencyCode: AvailableFlatNames;
};
