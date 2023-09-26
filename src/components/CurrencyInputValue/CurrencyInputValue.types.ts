import { Dispatch, MutableRefObject, RefObject, SetStateAction } from 'react';
import { TextInput } from 'react-native';
import { SwipeableItemImperativeRef } from 'react-native-swipeable-item';
import { PayloadAction } from '@reduxjs/toolkit';
import { ShowMessage } from 'context/MessageNotificationContext/WithNotification.types';
import { TSetSelectedCurrencies } from 'hooks/store/types';
import { AvailableCurrenciesNames } from 'types';

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
  inputRef: RefObject<TextInput>;
}) => {
  onChangeTextHandler: OnChangeTextHandler;
  onFocusHandler: OnFocusHandler;
  containerOnPressHandler: ContainerOnPressHandler;
  value: string;
};

export type TUseConvertedValues = (
  isFocused: boolean,
  value: string,
  focusedCurrencyValue: string | undefined,
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
