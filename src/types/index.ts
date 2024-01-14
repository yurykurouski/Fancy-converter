import React, { MutableRefObject, RefObject } from 'react';
import { StyleProp, TextInput, ViewStyle } from 'react-native';
import { Action } from '@reduxjs/toolkit';
import { ColorsDark, ColorsLight } from 'assets/colors';
import { DrawerStackParamList } from 'navigation/DrawerStack/DrawerStack.routes';
import by from 'resources/locales/by.json';
import en from 'resources/locales/en.json';
import pl from 'resources/locales/pl.json';
import ua from 'resources/locales/ua.json';

import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
} from './availableCurrNames';
export {
  EAvailableCryptoNames,
  EAvailableFiatNames,
} from './availableCurrNames';

export type TDispatchCallback<T, A> = (value: T) => Action<A>;

export type TLocaleString =
  | keyof typeof en
  | keyof typeof by
  | keyof typeof ua
  | keyof typeof pl;

export type TGroupByName<T> = (data: T[]) => {
  [key: string]: T[];
};

export enum EDimensions {
  WIDTH = 'width',
  HEIGHT = 'height',
}

export enum EColorSchemeBehavior {
  MANUAL = 'MANUAL',
  AUTO = 'AUTO',
}

export enum ECurrencyType {
  FIAT = 'FIAT',
  CRYPTO = 'CRYPTO',
}

export type TAvailableCurrencies = {
  [ECurrencyType.FIAT]: EAvailableFiatNames[];
  [ECurrencyType.CRYPTO]: EAvailableCryptoNames[];
};

export enum ENotificationType {
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
  RATES_UPDATED = 'RATES_UPDATED',
}

export type TNotificationData = {
  type: ENotificationType;
  timeStamp: number;
  data?: unknown;
};

export type TAvailableCurrenciesNames =
  | EAvailableFiatNames
  | EAvailableCryptoNames;

export type TSVGIcon = (props: {
  size: number;
  style?: StyleProp<ViewStyle>;
  color?: ColorsLight | ColorsDark | string;
}) => React.ReactNode;

export type RootStackParamsList = DrawerStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}

export enum EHapticType {
  IMPACT_LIGHT = 'impactLight',
  IMPACT_MEDIUM = 'impactMedium',
  IMPACT_HEAVY = 'impactHeavy',
  NOTIFICATION_SUCCESS = 'notificationSuccess',
  NOTIFICATION_WARNING = 'notificationWarning',
  NOTIFICATION_ERROR = 'notificationError',
  SELECTION_IOS = 'selection',
  EFFECT_TICK_ANDROID = 'effectTick',
  LONG_PRESS_ANDROID = 'effectClick',
}

export type TUseHandleDeepLinkProps = {
  currencies: {
    [key in TAvailableCurrenciesNames]?: string;
  };
  inputsRefs: MutableRefObject<{
    [key in TAvailableCurrenciesNames]?: RefObject<TextInput>;
  }>;
};
