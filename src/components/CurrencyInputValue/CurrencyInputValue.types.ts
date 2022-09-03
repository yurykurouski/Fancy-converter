import React, { MutableRefObject } from 'react';
import { TextInput } from 'react-native';
import { SwipeableItemImperativeRef } from 'react-native-swipeable-item';
import { ShowMessage } from 'context/MessageNotificationContext/WithNotification.types';
import { AvaliableCurrenciesNames, SelectedCurrencies } from 'types';

export type Props = {
  currencyCode: AvaliableCurrenciesNames;
  drag: () => void;
  itemRefs: MutableRefObject<
    Map<AvaliableCurrenciesNames, SwipeableItemImperativeRef>
  >;
};

export type OnChangeTextHandler = (text: string) => void;
export type OnFocusHandler = (text: string) => void;
export type ContainerOnPressHandler = () => void;

export type UseCurrencyInputHandlers = (props: {
  setFocusedCurrencyValue: React.Dispatch<React.SetStateAction<string>>;
  setFocusedCurrencyName: React.Dispatch<
    React.SetStateAction<AvaliableCurrenciesNames>
  >;
  currencyCode: AvaliableCurrenciesNames;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputRef: MutableRefObject<TextInput>;
}) => {
  onChangeTextHandler: OnChangeTextHandler;
  onFocusHandler: OnFocusHandler;
  containerOnPressHandler: ContainerOnPressHandler;
  value: string;
};

export type UseConvertedValues = (
  isFocused: boolean,
  value: string | null,
  focusedCurrencyValue: string,
  course: number,
  focusedCurrencyCourse: number,
) => string;

export type UseHandleDeletePress = {
  setIsReadyToDelete: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCurrencies: SelectedCurrencies;
  currencyCode: string;
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
  startNotification: ShowMessage;
};
