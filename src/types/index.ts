import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Action } from '@reduxjs/toolkit';
import { ColorsDark, ColorsLight } from 'assets/colors';
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
  color?: ColorsLight | ColorsDark;
}) => React.JSX.Element;
