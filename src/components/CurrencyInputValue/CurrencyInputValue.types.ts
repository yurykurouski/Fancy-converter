import { Dispatch, RefObject, SetStateAction } from 'react';
import { TextInput } from 'react-native';
import { ShowMessage } from 'context/MessageNotificationContext/WithNotification.types';
import {
  TAddToSelectedCurrenciesInEdit,
  TRemoveFromSelectedCurrenciesInEdit,
  TSetFocusedCurrencyName,
  TSetFocusedCurrencyValue,
  TSetSelectedCurrEditMode,
  TSetSelectedCurrencies,
} from 'hooks/store/types';
import { AvailableCurrenciesNames } from 'types';

export type Props = {
  currencyCode: AvailableCurrenciesNames;
};

export type OnChangeTextHandler = (text: string) => void;
export type OnFocusHandler = (text: string) => void;
export type ContainerOnPressHandler = () => void;

export type TUseCurrencyInputHandlers = (props: {
  setFocusedCurrencyValue: TSetFocusedCurrencyValue;
  setFocusedCurrencyName: TSetFocusedCurrencyName;
  currencyCode: AvailableCurrenciesNames;
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

export type UseHandleDeletePress = {
  setIsReadyToDelete: Dispatch<SetStateAction<boolean>>;
  selectedCurrencies: AvailableCurrenciesNames[];
  currencyCode: AvailableCurrenciesNames;
  setSelectedCurrencies: TSetSelectedCurrencies;
  startNotification: ShowMessage | null;
};

export type TUseOnContainerPressParams = {
  isInEditMode: boolean;
  currencyCode: AvailableCurrenciesNames;
  addToCurrInEdit: TAddToSelectedCurrenciesInEdit;
  selectedCurrenciesInEdit: AvailableCurrenciesNames[];
  removeFromSelectedCurrenciesInEdit: TRemoveFromSelectedCurrenciesInEdit;
  setSelectedCurrInEditMode: TSetSelectedCurrEditMode;
};

export type TUseHandleLongPressParams = {
  isInEditMode: boolean;
  setSelectedCurrInEditMode: TSetSelectedCurrEditMode;
  addToCurrInEdit: TAddToSelectedCurrenciesInEdit;
  currencyCode: AvailableCurrenciesNames;
};
