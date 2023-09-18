import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { TextInput } from 'react-native';
import { SwipeableItemImperativeRef } from 'react-native-swipeable-item';
import { PayloadAction } from '@reduxjs/toolkit';
import { ShowMessage } from 'context/MessageNotificationContext/WithNotification.types';
import { AvailableCurrenciesNames, SelectedCurrencies } from 'types';

export type Props = {
  currencyCode: AvailableCurrenciesNames;
  drag: () => void;
  itemRefs: MutableRefObject<
    Map<AvailableCurrenciesNames, SwipeableItemImperativeRef>
  >;
};

export type OnChangeTextHandler = (text: string) => void;
export type OnFocusHandler = (text: string) => void;
export type ContainerOnPressHandler = () => void;

export type UseCurrencyInputHandlers = (props: {
  setFocusedCurrencyValue: (value: string) => PayloadAction<string>;
  setFocusedCurrencyName: (
    name: AvailableCurrenciesNames,
  ) => PayloadAction<AvailableCurrenciesNames>;
  currencyCode: AvailableCurrenciesNames;
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
  setIsReadyToDelete: Dispatch<SetStateAction<boolean>>;
  selectedCurrencies: SelectedCurrencies;
  currencyCode: string;
  setSelectedCurrencies: Dispatch<SetStateAction<string[]>>;
  startNotification: ShowMessage;
};
