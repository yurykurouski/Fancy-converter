import { StyleProp, ViewStyle } from 'react-native';
import { ColorsDark, ColorsLight } from 'assets/colors';
import by from 'resources/locales/by.json';
import en from 'resources/locales/en.json';
import pl from 'resources/locales/pl.json';
import ua from 'resources/locales/ua.json';
import { PERSISTED_STORES } from 'store/store.config';

import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
} from './availableCurrNames';
export {
  EAvailableCryptoNames,
  EAvailableFiatNames,
} from './availableCurrNames';

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
  ERROR = 'ERROR',
  MESSAGE = 'MESSAGE',
}

export type TNotificationData = {
  message?: string;
  timeStamp?: number;
  type?: ENotificationType;
};

export type TAvailableCurrenciesNames =
  | EAvailableFiatNames
  | EAvailableCryptoNames;

export type TSVGIcon = {
  size?: number;
  style?: StyleProp<ViewStyle>;
  color?: ColorsLight | ColorsDark | string;
};

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

export type TSelectedCurrencies = {
  [key in TAvailableCurrenciesNames]?: string;
};

export type TStoreConfig = {
  [key in PERSISTED_STORES]: {
    store: { [key: string]: unknown };
    whiteList: string[];
  };
};

export type TRehydrateStateProps = {
  storeChunk: ValueOf<TStoreConfig>;
  parsedValues: TStoreConfig;
};
